const { formatPrice, date } = require('../../lib/utils');

const Category = require('../models/Category');
const Product = require('../models/Product');
const File = require('../models/File');

module.exports = {
  create(request, response) {
    //pegar categorias
    Category.all()
      .then((results) => {

        const categories = results.rows;

        return response.render('products/create.njk', { categories });
      }).catch((err) => {
        throw new Error(err)
      });
  },

  async post(request, response) {
    // logica de salvar
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if(request.body[key] == '') {
        return response.send('Please, fill all the fields!');
      };
    };

    if (request.files.length == 0) return response.send('Please, send at least one image');

    let results = await Product.create(request.body);
    const productId = results.rows[0].id;

    const filesPromise = request.files.map(file => File.create({...file, product_id: productId}));
    await Promise.all(filesPromise);

    return response.redirect(`/products/${productId}/edit`);
  },

  async show(request, response) {
    let results = await Product.find(request.params.id);
    const product = results.rows[0];

    if (!product) return response.send('Product not found!');

    const { day, hour, minutes, month } = date(product.updated_at);

    product.published = {
      day: `${day}/${month}`, 
      hour: `${hour}h${minutes}`,
    };

    product.old_price = formatPrice(product.old_price);
    product.price = formatPrice(product.price);

    results = await Product.files(product.id);
    let files = results.rows.map(file => ({
      ...file,
      src: `${request.protocol}://${request.headers.host}${file.path.replace('public', '')}`,
    }));

    return response.render('products/show', { product, files });
  },

  async edit(request, response) {
    let results = await Product.find(request.params.id);
    const product = results.rows[0];

    if(!product) return response.send('Product not found!');

    product.old_price = formatPrice(product.old_price);
    product.price = formatPrice(product.price);

    // get Categories
    results = await Category.all();
    const categories = results.rows;

    // get Images
    results = await Product.files(product.id);
    let files = results.rows;

    files = files.map(file => ({
      ...file,
      src: `${request.protocol}://${request.headers.host}${file.path.replace('public', '')}`,
    }));

    return response.render('products/edit.njk', { product, categories, files });
  },

  async put(request, response) {
    const keys = Object.keys(request.body);

    for (let key of keys) {
      if(request.body[key] == '' && key != 'removed_files') return response.send('Please, fill all the fields!');
    };

    if (request.files.length != 0) {
      const newFilesPromise = request.files.map(file => File.create({...file, product_id: request.body.id}));

      await Promise.all(newFilesPromise);
    };

    if(request.body.removed_files) {
      const removedFiles = request.body.removed_files.split(',');
      const lastIndex = removedFiles.length - 1;
      removedFiles.splice(lastIndex, 1);

      const removeFilesPromise = removedFiles.map(id => File.delete(id));

      await Promise.all(removeFilesPromise);
    };

    request.body.price = request.body.price.replace(/\D/g, '');

    if (request.body.old_price != request.body.price) {
      const oldProduct = await Product.find(request.body.id);

      request.body.old_price = oldProduct.rows[0].price;
    };  

    await Product.update(request.body);

    return response.redirect(`/products/${request.body.id}`);
  },

  async delete(request, response) {
    await Product.delete(request.body.id);

    return response.redirect('/products/create');
  },
};
import { getRepository, Repository, In } from 'typeorm';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO';
import IUpdateProductsQuantityDTO from '@modules/products/dtos/IUpdateProductsQuantityDTO';
import Product from '../entities/Product';

interface IFindProducts {
  id: string;
}

class ProductsRepository implements IProductsRepository {
  private ormRepository: Repository<Product>;

  constructor() {
    this.ormRepository = getRepository(Product);
  }

  public async create({
    name,
    price,
    quantity,
  }: ICreateProductDTO): Promise<Product> {
    const product = this.ormRepository.create({
      name,
      price,
      quantity,
    });

    await this.ormRepository.save(product);

    return product;
  }

  public async findByName(name: string): Promise<Product | undefined> {
    const productName = await this.ormRepository.findOne({
      where: { name },
    });

    return productName;
  }

  public async findAllById(products: IFindProducts[]): Promise<Product[]> {
    const productsIds = await this.ormRepository.find({
      id: In(products),
    });

    return productsIds;
  }

  public async updateQuantity(
    products: IUpdateProductsQuantityDTO[],
  ): Promise<Product[]> {
    const productId = products.find(product => product.id);

    const findAllProducts = await this.ormRepository.find({
      where: { id: productId?.id },
    });

    const productsUpdated = findAllProducts.map(item => {
      if (item.id === productId?.id) {
        const productUpdated = {
          ...item,
          quantity: item.quantity - productId.quantity,
        };
        return [productUpdated];
      }
      return undefined;
    });

    return productsUpdated;
  }
}

export default ProductsRepository;

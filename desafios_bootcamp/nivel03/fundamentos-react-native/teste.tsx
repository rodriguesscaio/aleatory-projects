exxport default const addToCart = useCallback(
  async (product: Product) => {
    // TODO ADD A NEW ITEM TO THE CART

    const newProduct = { ...product, quantity: 1 };

    const findProduct = products.find(item => item.id === newProduct.id);
    const findIndex = products.findIndex(item => item.id === newProduct.id);

    if (findProduct) {
      const updateProduct = {
        ...findProduct,
        quantity: findProduct.quantity += 1,
      };
      setProducts([...products, (products[findIndex] = updateProduct)]);
    } else {
      setProducts([...products, newProduct]);
    }
  },
  [products],
);

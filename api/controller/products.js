const ProductsService = require("../services/products");

class ProductsController {
  static async getAllProducts(req, res) {
    const { error, data } = await ProductsService.getAllProducts();

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async getProductById(req, res) {
    const { error, data } = await ProductsService.getProductById(
      req.params.productId
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async getProductByCategoryName(req, res) {
    const { error, data } = await ProductsService.getProductByCategoryName(
      req.params.name
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async getProductByTitleName(req, res) {
    const { error, data } = await ProductsService.getProductByTitleName(
      req.params.name
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async postReview(req, res) {
    const { error, data } = await ProductsService.postReview(
      req.params.productId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = ProductsController;

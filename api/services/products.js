const Product = require("../models/Products");

class ProductsService {
  static async getAllProducts() {
    try {
      const products = await Product.find({state:true});
      console.log("PRODUCT", products);

      return { error: false, data: products };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getProductById(id) {
    try {
      const product = await Product.findById(id);

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getProductByCategoryName(name) {
    try {
      const product = await Product.find({
        category: { $regex: name, $options: "i" },
      });

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getProductByTitleName(name) {
    try {
      const product = await Product.find({
        title: { $regex: name, $options: "i" },
      });

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async postReview(id, body) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: id },
        {
          $push: {
            reviews: {
              _id: body._id,
              ratings: body.rating,
            },
          },
        },
        { new: true }
      );

      return { error: false, data: product };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = ProductsService;

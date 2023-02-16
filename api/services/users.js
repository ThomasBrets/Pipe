const User = require("../models/Users");
const Product = require("../models/Products");
const History = require("../models/History");

const joi = require("../config/joi");
const bcrypt = require("bcrypt");

class UserService {
  static async updateUser(id, body) {
    try {
      const { error, value } = joi.validate({
        password: body.password,
        name: body.name,
      });

      if (!error) {
        const user = await User.findByIdAndUpdate(
          id,
          {
            $set: {
              name: body.name,
              email: body.email,
              password: body.password && bcrypt.hashSync(body.password, 10),
            },
          },
          { new: true }
        );
        return { error: false, data: user };
      }
      return { error: true, data: error };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getBasket(id) {
    try {
      const basket = await User.findOne({ _id: id }).populate("cart._id", {
        title: 1,
        price: 1,
        amount: 1,
      });

      return { error: false, data: basket };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async addProductToBasket(id, body) {
    try {
      const user = await User.findByIdAndUpdate(
        id,
        {
          $push: {
            cart: body,
          },
        },
        { new: true }
      );

      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async deleteProductToBasket(id, productId) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        {
          $pull: {
            cart: { _id: productId },
          },
        },
        { new: true }
      );
      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async updateProductOnBasket(id, productId, body) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: id },
        {
          $set: {
            "cart.$[product].amount": body.amount,
          },
        },
        { arrayFilters: [{ "product._id": productId }], new: true }
      );

      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }

  static async getHistory(id) {
    try {
      const user = await History.find({ user: id }).populate(
        "user product._id"
      );

      return { error: false, data: user };
    } catch (error) {
      return { error: true, data: error.message };
    }
  }
}

module.exports = UserService;

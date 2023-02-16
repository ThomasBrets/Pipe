const UserService = require("../services/users");

class UserController {
  static async updateUser(req, res) {
    const { error, data } = await UserService.updateUser(
      req.params.userId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async getBasket(req, res) {
    const { error, data } = await UserService.getBasket(req.params.userId);

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  static async addProductToBasket(req, res) {
    const { error, data } = await UserService.getBasket(
      req.params.userId,
      req.body
    );

    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }

  
  static async deleteProductToBasket(req, res) {
    const { error, data } = await UserService.deleteProductToBasket(
      req.params.userId,
      req.params.productId
      );
      
      return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
    }
    
    static async updateProductToBasket(req, res) {
      const { error, data } = await UserService.updateProductToBasket(
        req.params.userId,
        req.params.productId,
        req.body
        );
        
        return error
        ? res.status(data.status || 500).json({ message: data })
        : res.json(data);
      }
      
      static async confirmBasket(req, res) {
        const { error, data } = await UserService.getBasket(req.params.userId);
    
        return error
          ? res.status(data.status || 500).json({ message: data })
          : res.json(data);
      }
      
      static async getHistory(req, res) {
        const { error, data } = await UserService.getHistory(req.params.userId);
        
    return error
      ? res.status(data.status || 500).json({ message: data })
      : res.json(data);
  }
}

module.exports = UserController;

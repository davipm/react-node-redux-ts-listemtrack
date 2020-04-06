import { Request, Response } from "express";
import User from "../models/user.model";

class UserController {
  public async index(req: Request, res: Response) {
    try {
      const user = await User.find();
      return res.status(200).json({
        success: true,
        count: user.length,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }

  public async newUser(req: Request, res: Response) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json({
        success: true,
        data: user,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
}

export default new UserController();

import { Request, Response } from "express";
import { UserService } from "../services/user.service";

const service = new UserService();

export class UserController {
  static async create(req: Request, res: Response) {
    const user = await service.createUser(req.body);
    res.json(user);
  }

  static async update(req: Request, res: Response) {
    await service.updateUser(Number(req.params.id), req.body);
    res.json({ message: "Updated" });
  }

  static async delete(req: Request, res: Response) {
    await service.deleteUser(Number(req.params.id));
    res.json({ message: "Deleted" });
  }

  static async findByName(req: Request, res: Response) {
    const users = await service.findByName(req.query.name as string);
    res.json(users);
  }
}

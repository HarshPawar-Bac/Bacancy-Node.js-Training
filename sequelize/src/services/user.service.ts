import { User } from "../models/User";
import { UserRepository } from "../repositories/user.repository";

export class UserService {
  private repo = new UserRepository();

  async createUser(data: any) {
    return this.repo.create(data);
  }

  async updateUser(id: number, data: any) {
    return this.repo.update(id, data);
  }

  async deleteUser(id: number) {
    return this.repo.delete(id);
  }

  async findByName(name: string) {
    return this.repo.findByName(name);
  }
}
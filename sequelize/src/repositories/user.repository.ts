import { User } from "../models/User";

export class UserRepository {
    create(data: any) {
        return User.create(data);
    }

    findByName(name: string){
        return User.findAll({where: {name}});
    }

    findById(id: number){
        return User.findByPk(id);
    }

    update(id: number, data: any){
        return User.update(data, {where: {id}});
    }

    delete(id: number){
        return User.destroy({where: {id}})
    }
}
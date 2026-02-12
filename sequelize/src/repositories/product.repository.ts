import { Product } from "../models/Product";

export class ProductRepository {
    create(data: any){
        return Product.create(data);
    }

    findAll(){
        return Product.findAll();
    }

    delete(id: number){
        return Product.destroy({where: {id}})
    }
}
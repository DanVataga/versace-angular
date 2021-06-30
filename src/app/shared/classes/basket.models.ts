import { IBasketProd } from "../interfaces/basket.interfaces";

export class Product implements IBasketProd {
    constructor(
        public id: number,
        public categoryName: string,
        public name: string,
        public price: number,
        public image: string,
        public size: number
    ) {
        
    }
}
import { IBasketProd } from "../interfaces/basket.interfaces";

export class BasketProd implements IBasketProd {
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
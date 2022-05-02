import { Category } from "./Category";

export class Coupon {
    public id: number = 0;
    public companyId: number = 0;
    public title: string = "";
    public description: string = "";
    public startDate: Date = new Date();
    public endDate: Date = new Date();
    public amount: number = 0;
    public price: number = 0;
    public image:string = "";
    public category: Category = Category.EDUCATION;

    /*
    constructor(id: number, companyId: number,  title: string, description: string, startDate: string, endDate: string, amount: number,
        price: number, image: string, category: Category) {
        this.id = id;
        this.companyId = companyId;
        this.title = title;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.price = price;
        this.image = image;
        this.category = category;
    }
    */

}
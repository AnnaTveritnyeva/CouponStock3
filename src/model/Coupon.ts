import { Category } from "./Category";

export class Coupon {
    public id: number = 0;
    public companyId: number = 0;
    public title: string = "";
    public description: string = "";
    public startDate: string = "";
    public endDate: string = ""; 
    public amount: number = 0;
    public price: number = 0;
    public image:string = "";
    public category: Category|string = Category.EDUCATION;

}
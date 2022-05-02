import { Coupon } from "./Coupon";

class Customer {
    public id?: number = 0;
    public firstName: string = "";
    public lastName: string = "";
    public email: string = "";
    public password?:string="";
    public coupons?: Coupon[] = []
}

export default Customer;
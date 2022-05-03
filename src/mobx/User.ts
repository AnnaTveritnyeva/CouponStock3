import { makeObservable, observable, action } from "mobx";
import { Coupon } from "../model/Coupon";
import { Role } from "../model/Role";

export class User {
    email:string = "";
    role:Role = Role.GUEST;
    token:string = "";
    couponsInCart: Coupon[] = []

    constructor() {
        makeObservable(this, {
            couponsInCart:observable,
            addCouponToCart: action,
        })
    }

    addCouponToCart = (newCoupon: Coupon) => {
        if (!this.couponsInCart.some(coupon => coupon === newCoupon)){
            this.couponsInCart.push(newCoupon);
        }
        
    }

    deleteCouponFromCart = (couponId:number) =>{
        this.couponsInCart = this.couponsInCart.filter(coupon=> couponId !== coupon.id)
    }
}
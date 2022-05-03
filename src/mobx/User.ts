import { makeObservable, observable, action } from "mobx";
import { Coupon } from "../model/Coupon";
import { Role } from "../model/Role";

export class User {
    role:Role = Role.GUEST;
    token:string = "";
    couponsInCart: Coupon[] = []

    constructor() {
        makeObservable(this, {
            couponsInCart:observable,
            AddCouponToCart: action,
        })
    }

    AddCouponToCart = (newCoupon: Coupon) => {
        if (!this.couponsInCart.some(coupon => coupon === newCoupon)){
            this.couponsInCart.push(newCoupon);
        }
        
    }

    DeleteCouponFromCart = (couponId:number) =>{
        this.couponsInCart = this.couponsInCart.filter(coupon=> couponId !== coupon.id)
    }
}
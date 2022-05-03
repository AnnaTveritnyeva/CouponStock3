import { makeObservable, observable, action } from "mobx";
import { Coupon } from "../model/Coupon";

export class AllCoupons {
    coupons: Coupon[] = []

    constructor() {
        makeObservable(this, {
            coupons: observable,
            updateCoupons: action,
        })
    }

    updateCoupons = (coupons: Coupon[]) => {
        this.coupons = coupons;
    }
}
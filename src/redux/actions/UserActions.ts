import { Coupon } from "../../model/Coupon"
import { myAction } from "./myAction"

export enum UserActionType {
    ADD_COUPON_TO_CART = "ADD_COUPON_TO_CART" ,
    DELETE_COUPON_FROM_CART = "DELETE_COUPON_FROM_CART"
}


export function addCouponToCart(coupon:Coupon): myAction {
    return { type: UserActionType.ADD_COUPON_TO_CART , payload:coupon}
}

//maybe better to work with coupon id instead of whole coupon
export function deleteCouponFromCart(couponId:number): myAction {
    return { type: UserActionType.DELETE_COUPON_FROM_CART , payload:couponId}
}
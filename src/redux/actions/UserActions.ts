import { Coupon } from "../../model/Coupon"
import { Role } from "../../model/Role"
import { UserCred } from "../../model/UserCred"
import { myAction } from "./myAction"

export enum UserActionType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    UPDATE_TOKEN = "UPDATE_TOKEN",
    ADD_COUPON_TO_CART = "ADD_COUPON_TO_CART" ,
    DELETE_COUPON_FROM_CART = "DELETE_COUPON_FROM_CART"
}

export function Login(role:Role, token:string){
    return { type: UserActionType.LOGIN , payload: {
        role: role,
        JWTtoken: token,
        couponsInCart: []
    }}
} 

export function Logout(){
    return { type: UserActionType.LOGOUT }
} 

export function AddCouponToCart(coupon:Coupon): myAction {
    return { type: UserActionType.ADD_COUPON_TO_CART , payload:coupon}
}

export function DeleteCouponFromCart(couponId:number): myAction {
    return { type: UserActionType.DELETE_COUPON_FROM_CART , payload:couponId}
}

export function UpdateJwtToken(token: string){
    return { type: UserActionType.UPDATE_TOKEN , payload:token}
}
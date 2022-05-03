import Company from "../model/Company";
import { Coupon } from "../model/Coupon";
import store from "./store";

export const getAllCoupons = (): Coupon[] => {
    return store.getState().guest.coupons
}

export const getAllCompanies = (): Company[] => {
    return store.getState().guest.companies
}

export const getCouponsInCart = (): Coupon[] => {
    return store.getState().user.couponsInCart
}
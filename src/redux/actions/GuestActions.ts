import Company from "../../model/Company";
import { Coupon } from "../../model/Coupon";
import { myAction } from "./myAction";

export enum GuestActionType {
    UPDATE_ALL_COUPONS = "UPDATE_ALL_COUPONS" ,
    UPDATE_ALL_COMPANIES = "UPDATE_ALL_COMPANIES"
}

export function updateAllCoupons(coupons:Coupon[]): myAction {
    return { type: GuestActionType.UPDATE_ALL_COUPONS , payload:coupons}
}

export function updateAllCompanies(companies:Company[]): myAction {
    return { type: GuestActionType.UPDATE_ALL_COMPANIES , payload:companies}
}

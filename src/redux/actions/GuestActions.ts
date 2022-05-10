import Company from "../../model/Company";
import { Coupon } from "../../model/Coupon";
import Customer from "../../model/Customer";
import { myAction } from "./myAction";

export enum GuestActionType {
    UPDATE_ALL_COUPONS = "UPDATE_ALL_COUPONS" ,
    UPDATE_ALL_COMPANIES = "UPDATE_ALL_COMPANIES",
    UPDATE_ALL_CUSTOMERS = "UPDATE_ALL_CUSTOMERS",
    ADD_COMPANY = "ADD_COMPANY",
    ADD_COUPON = "ADD_COUPON",
    ADD_CUSTOMER = "ADD_CUSTOMER",
    UPDATE_COMPANY = "UPDATE_COMPANY",
    UPDATE_COUPON = "UPDATE_COUPON",
    UPDATE_CUSTOMER = "UPDATE_CUSTOMER",
    DELETE_COMPANY ="DELETE_COMPANY",
    DELETE_CUSTOMER = "DELETE_CUSTOMER",
    DELETE_COUPON = "DELETE_COUPON",
}

export function updateAllCoupons(coupons:Coupon[]): myAction {
    return { type: GuestActionType.UPDATE_ALL_COUPONS , payload:coupons}
}

export function updateAllCompanies(companies:Company[]): myAction {
    return { type: GuestActionType.UPDATE_ALL_COMPANIES , payload:companies}
}

export function updateAllCustomers(customers:Customer[]): myAction{
    return { type: GuestActionType.UPDATE_ALL_CUSTOMERS , payload:customers}
}

export function addCompany(company:Company){
    return { type: GuestActionType.ADD_COMPANY , payload:company}
}

export function addCoupon(coupon:Coupon){
    return { type: GuestActionType.ADD_COUPON , payload:coupon}
}

export function addCustomer(customer:Customer){
    return { type: GuestActionType.ADD_CUSTOMER , payload:customer}
}

export function updateCoupon(coupon:Coupon): myAction {
    return { type: GuestActionType.UPDATE_COUPON , payload:coupon}
}

export function updateCompany(company:Company): myAction {
    return { type: GuestActionType.UPDATE_COMPANY , payload:company}
}

export function updateCustomer(customer:Customer): myAction{
    return { type: GuestActionType.UPDATE_CUSTOMER , payload:customer}
}

export function deleteCompany(companyId:number):myAction{
return {type: GuestActionType.DELETE_COMPANY, payload:companyId}
}

export function deleteCustomer(customerId:number):myAction{
    return {type: GuestActionType.DELETE_CUSTOMER, payload:customerId}
    }

    export function deleteCoupon(couponId:number):myAction{
        return {type: GuestActionType.DELETE_COUPON, payload:couponId}
        }
import Company from "../../model/Company";
import { Coupon } from "../../model/Coupon";
import Customer from "../../model/Customer";
import { GuestActionType } from "../actions/GuestActions";
import { myAction } from "../actions/myAction";


export interface GuestState {
    coupons: Coupon[];
    companies: Company[];
    customers: Customer[];
}

export const initialState: GuestState = { coupons: [], companies: [], customers: [] }


export function GuestReducer(state: GuestState = initialState, action: myAction): GuestState {
    const newState: GuestState = { ...state };
    switch (action.type) {
        case GuestActionType.UPDATE_ALL_COUPONS:
            newState.coupons = action.payload
            break;

        case GuestActionType.UPDATE_ALL_COMPANIES:
            newState.companies = action.payload;
            break;

        case GuestActionType.UPDATE_ALL_CUSTOMERS:
            newState.customers = action.payload;
            break;

        case GuestActionType.ADD_COMPANY:
            newState.companies.push(action.payload);
            break;

        case GuestActionType.ADD_COUPON:
            newState.coupons.push(action.payload);
            break;

        case GuestActionType.ADD_CUSTOMER:
            newState.customers.push(action.payload);
            break;

        //check how to upddate company and customer without password
        case GuestActionType.UPDATE_COMPANY:
            const newCompany: Company = action.payload as Company
            newState.companies[newState.companies.findIndex(company => company.id === newCompany.id)] = newCompany
            break;

        case GuestActionType.UPDATE_CUSTOMER:
            const newCustomer: Customer = action.payload as Customer
            newState.customers[newState.customers.findIndex(customer => customer.id === newCustomer.id)] = newCustomer
            break;

        case GuestActionType.UPDATE_COUPON:
            const newCoupon: Coupon = action.payload as Coupon
            newState.coupons[newState.coupons.findIndex(coupon => coupon.id === newCoupon.id)] = newCoupon
            break;
    }


    return newState;
}

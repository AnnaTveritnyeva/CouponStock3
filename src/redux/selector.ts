import Company from "../model/Company";
import { Coupon } from "../model/Coupon";
import Customer from "../model/Customer";
import { Role } from "../model/Role";
import { addCompany, addCoupon, addCustomer, deleteCompany, deleteCoupon, deleteCustomer, updateAllCompanies, updateAllCoupons, updateAllCustomers, updateCompany, updateCoupon, updateCustomer } from "./actions/GuestActions";
import { login, logout } from "./actions/UserActions";
import store from "./store";

//get
export const GetCoupons = (): Coupon[] => {
    return store.getState().guest.coupons
}

export const GetCompanies = (): Company[] => {
    return store.getState().guest.companies
}

export const GetCustomers = (): Customer[] => {
    return store.getState().guest.customers
}

export const GetCartCoupons = (): Coupon[] => {
    return store.getState().user.couponsInCart
}

export const getUserRole = ()=>{
    return store.getState().user.role
}


//update
export const UpdateAllCoupons = (coupons: Coupon[]) => {
    store.dispatch(updateAllCoupons(coupons))
}

export const UpdateAllCompanies = (companies: Company[]) => {
    store.dispatch(updateAllCompanies(companies))
}

export const UpdateAllCustomers = (customers: Customer[]) => {
    store.dispatch(updateAllCustomers(customers))
}

export const UpdateCompany = (company: Company) => {
    store.dispatch(updateCompany(company))
}

export const UpdateCustomer = (customer: Customer) => {
    store.dispatch(updateCustomer(customer))
}

export const UpdateCoupon = (coupon: Coupon) => {
    store.dispatch(updateCoupon(coupon))
}


//add
export const AddCompany = (company: Company) => {
    store.dispatch(addCompany(company))
}

export const AddCoupon = (coupon: Coupon) => {
    store.dispatch(addCoupon(coupon))
}

export const AddCustomer = (customer: Customer) => {
    store.dispatch(addCustomer(customer))
}

//delete
export const DeleteCompany = (companyId: number) =>{
    store.dispatch(deleteCompany(companyId));
}

export const DeleteCustomer = (customerId: number) =>{
    store.dispatch(deleteCustomer(customerId));
}

export const DeleteCoupon = (couponId: number) =>{
    store.dispatch(deleteCoupon(couponId));
}

//better to open another selector for that:
//login, logout
export const Login = (role:Role, token:string)=>{
    store.dispatch(login(role, token))
}

export const Logout = ()=>{
    store.dispatch(logout())
}
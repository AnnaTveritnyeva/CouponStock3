import axios from "axios";
import { Category } from "./model/Category";
import Company from "./model/Company";
import { Coupon } from "./model/Coupon";
import Customer from "./model/Customer";
import { UserCred } from "./model/UserCred";
import { updateJwt } from "./redux/actions/UserActions";
import store from "./redux/store";
import globals from "./utils/globals";

const instance = axios.create({
    timeout: 3000,
});


instance.interceptors.request.use(request =>{
request.headers = {"authorization": store.getState().user.JWTtoken}
    return request;
})

instance.interceptors.response.use(response =>{
    if (response.headers["authorization"] !== undefined){
        store.dispatch(updateJwt(response.headers["authorization"]))
    }
    return response;
})


export const AdminAxios = {
    addCompany(company: Company) {
        return instance.post(globals.admin.addCompany, company);
    },
    deleteCompany(companyId: number) {
        return instance.delete(globals.admin.deleteCompany + companyId);
    },
    updateCompany(company: Company) {
        return instance.put(globals.admin.updateCompany, company);
    },
    getAllCompanies() {
        return instance.get<Company[]>(globals.admin.getAllCompanies);
    },
    getOneCompany(companyId: number) {
        return instance.get<Company>(globals.admin.getOneCompany + companyId)
    },
    addCustomer(customer: Customer) {
        return instance.post(globals.admin.addCustomer, customer);
    },
    deleteCustomer(customerId: number) {
        return instance.delete(globals.admin.deleteCustomer + customerId);
    },
    updateCustomer(customer: Customer) {
        return instance.put(globals.admin.updateCustomer, customer);
    },
    getAllCustomers() {
        return instance.get<Customer[]>(globals.admin.getAllCustomers);
    },
    getOneCustomer(customerId: number) {
        return instance.get<Customer>(globals.admin.getOneCustomer + customerId)
    }
}


export const CompanyAxios = {
    addCoupon(coupon: Coupon) {
        return instance.post(globals.company.addCoupon, coupon);
    },
    deleteCoupon(couponId: number) {
        return instance.delete(globals.company.deleteCoupon + couponId);
    },
    updateCoupon(coupon: Coupon) {
        return instance.put(globals.company.updateCoupon, coupon);
    },
    getCompanyCoupons() {
        return instance.get<Coupon[]>(globals.company.getCompanyCoupons);
    },
    getCompanyCouponsByCategory(category: Category) {
        return instance.get<Coupon[]>(globals.company.getCompanyCouponsByCategory + category);
    },
    getCompanyCouponsByMaxPrice(maxPrice: number) {
        return instance.get<Coupon[]>(globals.company.getCompanyCouponsByMaxPrice + maxPrice);
    },
    getCompanyDetails() {
        return instance.get<Company>(globals.company.getCompanyDetails);
    }
}

export const CustomerAxios = {
    addPurchase(coupon: Coupon) {
        return instance.put(globals.customer.addPurchase, coupon);
    },
    getCustomerCoupons() {
        return instance.get<Coupon[]>(globals.customer.getCustomerCoupons);
    },
    getCustomerCouponsByCategory(category: Category) {
        return instance.get<Coupon[]>(globals.customer.getCustomerCouponsByCategory + category);
    },
    getCustomerCouponsByMaxPrice(maxPrice: number) {
        return instance.get<Coupon[]>(globals.customer.getCustomerCouponsByMaxPrice + maxPrice);
    },
    getCustomerDetails() {
        return instance.get<Customer>(globals.customer.getCustomerDetails);
    },
    purchaseCoupons(coupons: Coupon[]) {
        return instance.put(globals.customer.purchaseCoupons, coupons);
    },

    
}

export const GuestAxios = {
    getAllCoupons() {
        return instance.get<Coupon[]>(globals.guest.getAllCoupons);
    },  
    getAllCouponsByCategory(category: Category ){ 
        return instance.get<Coupon[]>(globals.guest.getAllCouponsByCategory + category);
    },
    getAllCouponsByMaxPrice(maxPrice: number){
        return instance.get<Coupon[]>(globals.guest.getAllCouponsByMaxPrice + maxPrice);
    },
    getAllCouponsByCompany(companyId:number){
        return instance.get<Coupon[]>(globals.guest.getAllCouponsByCompany + companyId);
    },
    getAllCompanies(){
        return instance.get<Company[]>(globals.guest.getAllCompanies);
    },
    getCompanyCouponsByCatefory(companyId:number, category: Category){
        return instance.get<Coupon[]>(globals.guest.getCompanyCouponsByCatefory+companyId+"/"+ category)
    },
    getCompanyCouponsByMaxPrice(companyId:number, maxPrice: number){
        return instance.get<Coupon[]>(globals.guest.getCompanyCouponsByMaxPrice+ companyId+"/"+ maxPrice)
    }
}

export const LoginAxios = {
    Login(userCred:UserCred){
        return instance.post<string>(globals.login.Login, userCred);
    }
}
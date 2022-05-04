import axios from "axios";
import { Category } from "./model/Category";
import Company from "./model/Company";
import { Coupon } from "./model/Coupon";
import Customer from "./model/Customer";
import { UserCred } from "./model/UserCred";
import { updateJwt } from "./redux/actions/UserActions";
import store from "./redux/store";

const instance = axios.create({
    baseURL: 'http://localhost:8080/',
    timeout: 3000,
    // check if like this or with interceptors
    headers:  {"authorization": store.getState().user.JWTtoken}
});


instance.interceptors.request.use(request =>{
request.headers = {"authorization": store.getState().user.JWTtoken}
    return request;
})

instance.interceptors.response.use(response =>{
    store.dispatch(updateJwt(response.headers["authorization"]))
    return response;
})


export const AdminAxios = {
    addCompany(company: Company) {
        return instance.post("admin/addCompany", company);
    },
    deleteCompany(companyId: number) {
        return instance.delete("admin/deleteCompany" + companyId);
    },
    updateCompany(company: Company) {
        return instance.put("admin/updateCompany", company);
    },
    getAllCompanies() {
        return instance.get<Company[]>("admin/getAllCompanies");
    },
    getOneCompany(companyId: number) {
        return instance.get<Company>("admin/getOneCompany" + companyId)
    },
    addCustomer(customer: Customer) {
        return instance.post("admin/addCustomer", customer);
    },
    deleteCustomer(customerId: number) {
        return instance.delete("admin/deleteCustomer" + customerId);
    },
    updateCustomer(customer: Customer) {
        return instance.put("admin/updateCustomer", customer);
    },
    getAllCustomers() {
        return instance.get<Customer[]>("admin/getAllCustomers");
    },
    getOneCustomer(customerId: number) {
        return instance.get<Customer>("admin/getOneCustomer" + customerId)
    }
}


export const CompanyAxios = {
    addCoupon(coupon: Coupon) {
        return instance.post("company/addCoupon", coupon);
    },
    deleteCoupon(couponId: number) {
        return instance.delete("company/deleteCoupon" + couponId);
    },
    updateCoupon(coupon: Coupon) {
        return instance.put("company/updateCompany", coupon);
    },
    getCompanyCoupons() {
        return instance.get<Coupon[]>("company/getCompanyCoupons");
    },
    getCompanyCouponsByCategory(category: Category) {
        return instance.get<Coupon[]>("company/getCompanyCouponsByCategory" + category);
    },
    getCompanyCouponsByMaxPrice(maxPrice: number) {
        return instance.get<Coupon[]>("company/getCompanyCouponsByMaxPrice" + maxPrice);
    },
    getCompanyDetails() {
        return instance.get<Company>("company/getCompanyDetails");
    }
}

export const CustomerAxios = {
    addPurchase(coupon: Coupon) {
        return instance.post("customer/addPurchase", coupon);
    },
    getCustomerCoupons() {
        return instance.get<Coupon[]>("customer/getCustomerCoupons");
    },
    getCustomerCouponsByCategory(category: Category) {
        return instance.get<Coupon[]>("customer/getCustomerCouponsByCategory" + category);
    },
    getCustomerCouponsByMaxPrice(maxPrice: number) {
        return instance.get<Coupon[]>("customer/getCustomerCouponsByMaxPrice" + maxPrice);
    },
    getCustomerDetails() {
        return instance.get<Customer>("customer/getCustomerDetails");
    }
}

export const GuestAxios = {
    getAllCoupons() {
        return instance.get<Coupon[]>("guest/getAllCoupons");
    },  
    getAllCouponsByCategory(category: Category | string){ 
        return instance.get<Coupon[]>("guest/getAllCouponsByCategory/" + category);
    },
    getAllCouponsByMaxPrice(maxPrice: number){
        return instance.get<Coupon[]>("guest/getAllCouponsByMaxPrice/" + maxPrice);
    },
    getAllCouponsByCompany(companyId:number){
        return instance.get<Coupon[]>("guest/getAllCouponsByCompanyId/" + companyId);
    },
    getAllCompanies(){
        return instance.get<Company[]>("guest/getAllCompanies");
    },

}

export const LoginAxios = {
    Login(userCred:UserCred){
        return instance.post<string>("authentication/login", userCred);
    }
}
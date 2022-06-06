class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        baseURL : "http://localhost:8080/",
    }
    public admin= {
        addCompany: this.urls.baseURL+"admin/addCompany",
        deleteCompany: this.urls.baseURL+"admin/deleteCompany/",
        updateCompany: this.urls.baseURL+ "admin/updateCompany" ,
        getAllCompanies: this.urls.baseURL+ "admin/getAllCompanies" ,
        getOneCompany: this.urls.baseURL+  "admin/getOneCompany",
        addCustomer: this.urls.baseURL+ "admin/addCustomer" ,
        deleteCustomer: this.urls.baseURL+ "admin/deleteCustomer/" ,
        updateCustomer: this.urls.baseURL+ "admin/updateCustomer" ,
        getAllCustomers: this.urls.baseURL+ "admin/getAllCustomers" ,
        getOneCustomer: this.urls.baseURL+ "admin/getOneCustomer" 
    }

    public company={
        addCoupon:this.urls.baseURL+ "company/addCoupon" ,
        deleteCoupon:this.urls.baseURL+  "company/deleteCoupon/",
        updateCoupon:this.urls.baseURL+  "company/updateCoupon",
        getCompanyCoupons:this.urls.baseURL+  "company/getCompanyCoupons",
        getCompanyCouponsByCategory:this.urls.baseURL+  "company/getCompanyCouponsByCategory/",
        getCompanyCouponsByMaxPrice:this.urls.baseURL+  "company/getCompanyCouponsByMaxPrice/",
        getCompanyDetails:this.urls.baseURL+ "company/getCompanyDetails" ,
    }

    public customer={
        addPurchase:this.urls.baseURL+ "customer/couponPurchase" ,
        getCustomerCoupons:this.urls.baseURL+ "customer/getCustomerCoupons" ,
        getCustomerCouponsByCategory:this.urls.baseURL+ "customer/getCustomerCouponsByCategory/" ,
        getCustomerCouponsByMaxPrice:this.urls.baseURL+ "customer/getCustomerCouponsByMaxPrice/" ,
        getCustomerDetails:this.urls.baseURL+ "customer/getCustomerDetails" ,
        purchaseCoupons:this.urls.baseURL+ "customer/purchaseListOfCoupons" ,
    }

    public guest={
        getAllCoupons:this.urls.baseURL+ "guest/getAllCoupons" ,
        getAllCouponsByCategory:this.urls.baseURL+ "guest/getAllCouponsByCategory/" ,
        getAllCouponsByMaxPrice:this.urls.baseURL+ "guest/getAllCouponsByMaxPrice/" ,
        getAllCouponsByCompany:this.urls.baseURL+ "guest/getAllCouponsByCompanyId/" ,
        getAllCompanies:this.urls.baseURL+ "guest/getAllCompanies" ,
        getCompanyCouponsByCatefory:this.urls.baseURL+ "guest/getCompanyCouponsByCategory/" ,
        getCompanyCouponsByMaxPrice:this.urls.baseURL+ "guest/getCompanyCouponsByMaxPrice/" ,
    }

    public login={
        Login:this.urls.baseURL+"authentication/login"
    }
    
}

class ProductionGlobals extends Globals{
    public urls = {
        baseURL: "/",
    }
    public admin= {
        addCompany: this.urls.baseURL+"admin/addCompany",
        deleteCompany: this.urls.baseURL+"admin/deleteCompany/",
        updateCompany: this.urls.baseURL+ "admin/updateCompany" ,
        getAllCompanies: this.urls.baseURL+ "admin/getAllCompanies" ,
        getOneCompany: this.urls.baseURL+  "admin/getOneCompany",
        addCustomer: this.urls.baseURL+ "admin/addCustomer" ,
        deleteCustomer: this.urls.baseURL+ "admin/deleteCustomer/" ,
        updateCustomer: this.urls.baseURL+ "admin/updateCustomer" ,
        getAllCustomers: this.urls.baseURL+ "admin/getAllCustomers" ,
        getOneCustomer: this.urls.baseURL+ "admin/getOneCustomer" 
    }

    public company={
        addCoupon:this.urls.baseURL+ "company/addCoupon" ,
        deleteCoupon:this.urls.baseURL+  "company/deleteCoupon/",
        updateCoupon:this.urls.baseURL+  "company/updateCoupon",
        getCompanyCoupons:this.urls.baseURL+  "company/getCompanyCoupons",
        getCompanyCouponsByCategory:this.urls.baseURL+  "company/getCompanyCouponsByCategory/",
        getCompanyCouponsByMaxPrice:this.urls.baseURL+  "company/getCompanyCouponsByMaxPrice/",
        getCompanyDetails:this.urls.baseURL+ "company/getCompanyDetails" ,
    }

    public customer={
        addPurchase:this.urls.baseURL+ "customer/couponPurchase" ,
        getCustomerCoupons:this.urls.baseURL+ "customer/getCustomerCoupons" ,
        getCustomerCouponsByCategory:this.urls.baseURL+ "customer/getCustomerCouponsByCategory/" ,
        getCustomerCouponsByMaxPrice:this.urls.baseURL+ "customer/getCustomerCouponsByMaxPrice/" ,
        getCustomerDetails:this.urls.baseURL+ "customer/getCustomerDetails" ,
        purchaseCoupons:this.urls.baseURL+ "customer/purchaseListOfCoupons" ,
    }

    public guest={
        getAllCoupons:this.urls.baseURL+ "guest/getAllCoupons" ,
        getAllCouponsByCategory:this.urls.baseURL+ "guest/getAllCouponsByCategory/" ,
        getAllCouponsByMaxPrice:this.urls.baseURL+ "guest/getAllCouponsByMaxPrice/" ,
        getAllCouponsByCompany:this.urls.baseURL+ "guest/getAllCouponsByCompanyId/" ,
        getAllCompanies:this.urls.baseURL+ "guest/getAllCompanies" ,
        getCompanyCouponsByCatefory:this.urls.baseURL+ "guest/getCompanyCouponsByCategory/" ,
        getCompanyCouponsByMaxPrice:this.urls.baseURL+ "guest/getCompanyCouponsByMaxPrice/" ,
    }

    public login={
        Login:this.urls.baseURL+"authentication/login"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;
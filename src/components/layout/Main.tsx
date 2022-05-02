import React from 'react';
import { BrowserRouter, Redirect, Route, Router, Switch} from 'react-router-dom';
import AllCouponsPage from '../pages/AllCouponsPage';
import CartPage from '../pages/CartPage';
import CompanyPage from '../pages/CompanyPage';
import CouponPage from '../pages/CouponPage';
import HomePage from '../pages/HomePage';
import Page404 from '../pages/Page404';
import UserPage from '../pages/UserPage';

//1. see if better separate the routing logic from the main
//2. see if there a ,ore progrsive way to write the router

function Main(): JSX.Element {
    return (
        <div>  
        <Switch>
            <Route path="/home" component ={HomePage}  exact/>
            <Route path="/coupon" component = {CouponPage} exact/>
            <Route path="/company" component={CompanyPage} exact/>
            <Route path="/allCoupons" component={AllCouponsPage} exact/>
            <Route path="/user" component={UserPage} exact/>
            <Route path="/cart" component={CartPage} exact/>
            <Redirect from="/" to="/home" exact />
            <Route component={Page404}/>
        </Switch>
        </div>
    )
}

export default Main;
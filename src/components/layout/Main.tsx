import React from 'react';
import { BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
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
        <BrowserRouter>
        <Switch>
            <Route path="/home" exact>
                <HomePage />
            </Route>
            <Route path="/coupon" exact>
                <CouponPage />
            </Route>
            <Route path="/company" exact>
                <CompanyPage />
            </Route>
            <Route path="/allCoupons" exact>
                <AllCouponsPage />
            </Route>
            <Route path="/user" exact>
                <UserPage />
            </Route>
            <Route path="/cart" exact>
                <CartPage />
            </Route>
            <Redirect from="/" to="/home" exact />
            <Route>
                <Page404 />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Main;
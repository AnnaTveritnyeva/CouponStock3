import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import store from '../../redux/store';
import Page404 from './Page404';

function CouponPage(): JSX.Element {
    const coupon: Coupon = useLocation().state as Coupon;
    const exists: Boolean = store.getState().guest.coupons.some(coupon => coupon === coupon);

    if (typeof (coupon) !== undefined) {
        return (
            <div>
                <h4>{coupon.title} Page </h4>
            </div>
        )
    }
    else {
        return <Redirect exact to="/couponNotFound">
            <Page404 />
        </Redirect>
    }
}

export default CouponPage;
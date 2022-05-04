import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import { GetCoupons } from '../../redux/selector';
import Page404 from './Page404';

function CouponPage(): JSX.Element {
    const myCoupon: Coupon = useLocation().state as Coupon;
    const exists: Boolean = GetCoupons().some(coupon => coupon === myCoupon);

    if (typeof (myCoupon) !== undefined) {
        return (
            <div>
                <h4>{myCoupon.title} Page </h4>
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
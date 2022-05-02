import React from 'react';
import { NavLink } from 'react-router-dom';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import store from '../../redux/store';
import CouponItem from '../items/CouponItem';

function HomePage(): JSX.Element {
    const companies: Company[] = store.getState().guest.companies
    const coupons: Coupon[] = store.getState().guest.coupons
    return (
        <div>
            Home
            <br />

            <NavLink exact to ="/cart">cart</NavLink>

            Our compamies:
            {companies.map(company =>
                <div key={company.id}> {company.email} </div>
            )}
            <br/>

            New Coupons:
            {coupons.slice(coupons.length-5,coupons.length).map(coupon =>
                <div key={coupon.id}> 
                <CouponItem coupon={coupon}/>
                </div>
            )}

        


           

        </div>
    )
}

export default HomePage;
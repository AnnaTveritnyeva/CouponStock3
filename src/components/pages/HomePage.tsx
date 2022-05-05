import React from 'react';
import { NavLink } from 'react-router-dom';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';
import CouponItem from '../items/CouponItem';

function HomePage(): JSX.Element {
    const companies: Company[] = GetCompanies()
    const coupons: Coupon[] = GetCoupons()
    return (
        <div>
            Home
            <br />

            <NavLink exact to="/cart" >cart</NavLink>

            Our compamies:
            {companies.map(company =>
                <div key={company.id} >
                    <NavLink exact to={{
                        pathname: "/company/:" + company.name, state: company

                    }}>
                        {company.name}
                    </NavLink>
                    {company.email}
                </div>
            )}
            <br />

            New Coupons:
            {coupons.slice(coupons.length - 5, coupons.length).map(coupon =>
                <span key={coupon.id}>
                    <NavLink exact to={{
                        pathname: "/coupon/:" + coupon.id, state: coupon
                    }}>
                        {coupon.title}
                    </NavLink>
                    <CouponItem key={coupon.id} coupon={coupon} />
                    <br/>
                </span>
            )}

        </div>
    )
}

export default HomePage;
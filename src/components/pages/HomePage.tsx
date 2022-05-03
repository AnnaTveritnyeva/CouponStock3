import React from 'react';
import { NavLink} from 'react-router-dom';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import { getAllCompanies, getAllCoupons } from '../../redux/selector';
import store from '../../redux/store';
import CouponItem from '../items/CouponItem';

function HomePage(): JSX.Element {
    const companies: Company[] = getAllCompanies()
    const coupons: Coupon[] = getAllCoupons()
    return (
        <div>
            Home
            <br />

            <NavLink exact to="/cart" >cart</NavLink>

            Our compamies:
            {companies.map(company =>
                <div key={company.id} >
                    <NavLink exact to={{
                        pathname: "/company/:"+company.name, state: company
                        
                    }}>
                        {company.name}
                    </NavLink>
                    {company.email}
                </div>
            )}
            <br />

            New Coupons:
            {coupons.slice(coupons.length - 5, coupons.length).map(coupon =>
                <div key={coupon.id}>
                    <NavLink exact to={{
                        pathname: "/coupon/:"+coupon.id, state: coupon
                    }}>
                        {coupon.title}
                    </NavLink>
                    <CouponItem coupon={coupon} />
                </div>
            )}






        </div>
    )
}

export default HomePage;
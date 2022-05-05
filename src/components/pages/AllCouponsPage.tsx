import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { GuestAxios } from '../../axios';
import { Category } from '../../model/Category';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';

import CouponItem from '../items/CouponItem';
import { CategoryFilter, CategoryFilterModel, Layout } from '../items/filters/CategoryFilter';
import PriceFilter, { PriceFilterModel } from '../items/filters/PriceFilter';

function AllCouponsPage():JSX.Element{
    const [coupons, setCoupons] = useState<Coupon[]>(GetCoupons())
    const onSubmitPrice: SubmitHandler<PriceFilterModel> = (data) => {
        GuestAxios.getAllCouponsByMaxPrice(data.price).then(response => setCoupons(response.data))
    }

    const onSubmitCategory: SubmitHandler<CategoryFilterModel> = (data) => {
        if (data.category === "") {
            setCoupons(GetCoupons())
        }
        else {
            GuestAxios.getAllCouponsByCategory(data.category as Category).then(response => setCoupons(response.data))
        }
    }

return(

    <div>
        AllCouponsPage
        {coupons.map(coupon=>
            <CouponItem key={coupon.id} coupon={coupon}/>
            )}
       
        <PriceFilter coupons={GetCoupons()} onSubmit={onSubmitPrice }/>
        <CategoryFilter layout={Layout.top} onSubmit={onSubmitCategory} />
        {GetCompanies().map(company =>
                <div key={company.id} >
                    <NavLink exact to={{
                        pathname: "/company/:" + company.name, state: company

                    }}>
                        {company.name}
                    </NavLink>
                    {company.email}
                </div>
            )}
    </div>
)
}

export default AllCouponsPage;
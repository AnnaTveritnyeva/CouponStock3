import { Grid, Pagination } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { GuestAxios } from '../../axios';
import { Category } from '../../model/Category';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';

import CouponItem from '../items/CouponItem';
import { CategoryFilter, CategoryFilterModel, Layout } from '../items/filters/CategoryFilter';
import PriceFilter, { PriceFilterModel } from '../items/filters/PriceFilter';

function AllCouponsPage(): JSX.Element {
    const [coupons, setCoupons] = useState<Coupon[]>(GetCoupons())
    const [page, setPage] = useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const items = page * 10;

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

    useEffect(() => {
        setPage(1)
    }, [coupons])


    
    return (

        <div>
            AllCouponsPage
            <Grid container //className={classes.couponsContainer}
            >
                <Grid //className={classes.coupons} 
                    item xs={12} md={8}
                >
                    {coupons.slice(items - 10, items).map(coupon =>
                        <CouponItem key={coupon.id} coupon={coupon} />

                    )}
                </Grid>
                <Grid //className=//{classes.additionalCards} 
                    item xs={12} md={4}
                >

                    {/* <NewsletterItem />
                    <JoinCompanyItem /> */}


                </Grid>
            </Grid>
            {/* {coupons.map(coupon=>
            <CouponItem key={coupon.id} coupon={coupon}/>
            )} */}

            <PriceFilter coupons={GetCoupons()} onSubmit={onSubmitPrice} />
            <CategoryFilter layout={Layout.top} onSubmit={onSubmitCategory} />

            <Pagination count={Math.floor((coupons.length + 9) / 10)} page={page} onChange={handleChange} />
        </div>
    )
}

export default AllCouponsPage;
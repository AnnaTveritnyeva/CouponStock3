import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import {useLocation } from 'react-router-dom';
import { GuestAxios } from '../../axios';
import { Category } from '../../model/Category';
import { Coupon } from '../../model/Coupon';
import CouponsList from '../items/CouponsList';


function CategoryPage(): JSX.Element {
    const myCategory = useLocation().state as Category;
    const [coupons, setCoupons] = useState<Coupon[]>([])

    const GetCategoryCoupons = () => {
        GuestAxios.getAllCouponsByCategory(myCategory)
            .then(res => {
                setCoupons(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
       // if (coupons.length === 0) {
            GetCategoryCoupons()
       // }
    }, [myCategory])

    return (
        <div className="CompanyPage">

            <Grid container>
                <Grid item xs={12} md={8}>
                    <CouponsList coupons={coupons} />
                </Grid>
                <Grid item xs={12} md={4}>
                    {/* <PriceFilter coupons={myCompany.coupons} onSubmit={onSubmitPrice}/>  
                        <CategoryFilter layout={Layout.side} onSubmit={onSubmitCategory}/>       */}
                </Grid>
            </Grid>
        </div>
    )


}

export default CategoryPage;
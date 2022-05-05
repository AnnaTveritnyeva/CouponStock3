import { Grid } from '@mui/material';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { Redirect, useLocation } from 'react-router-dom';
import { CompanyAxios, GuestAxios } from '../../axios';
import { Category } from '../../model/Category';
import Company from '../../model/Company';
import { Coupon } from '../../model/Coupon';
import { GetCompanies } from '../../redux/selector';
import CouponsList from '../items/CouponsList';
import { CategoryFilter, CategoryFilterModel, Layout } from '../items/filters/CategoryFilter';
import PriceFilter, { PriceFilterModel } from '../items/filters/PriceFilter';
import Page404 from './Page404';

function CompanyPage(): JSX.Element {
    //maybe theres a better and faster way to do that
    const myCompany = useLocation().state as Company;
    //see if we need the exists
    const exists: Boolean = GetCompanies().some(company => company.id === myCompany.id);

    const [coupons, setCoupons] = useState<Coupon[]>(myCompany.coupons)
    const onSubmitPrice: SubmitHandler<PriceFilterModel> = (data) => {
        GuestAxios.getCompanyCouponsByMaxPrice(myCompany.id as number, data.price).then(response => setCoupons(response.data))
    }

    const onSubmitCategory: SubmitHandler<CategoryFilterModel> = (data) => {
        if (data.category === "") {
            setCoupons(myCompany.coupons)
        }
        else {
            GuestAxios.getCompanyCouponsByCatefory(myCompany.id as number, data.category as Category).then(response => setCoupons(response.data))
        }
    }
    
    if (exists) {
        return (
            <div className="CompanyPage">
            {/* <UserPageHeader 
            email={myCompany.email} 
            name={myCompany.name} 
            userPage={false} 
            img={myCompany.image}
            coupons={myCompany.coupons.length} /> */}
             <Grid container>
                 <Grid item xs={12} md={8}>
                     <CouponsList coupons={coupons} />
                 </Grid>
                 <Grid item xs={12} md={4}>
                        <PriceFilter coupons={myCompany.coupons} onSubmit={onSubmitPrice}/>  
                        <CategoryFilter layout={Layout.side} onSubmit={onSubmitCategory}/>      
                 </Grid>
             </Grid>
         </div>
        )
    }
    else {
        return <Redirect exact to="/companyNotFound">
            {console.log(exists)}
            <Page404 />
        </Redirect>
    }

}

export default CompanyPage;
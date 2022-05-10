import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { CustomerAxios } from "../../../axios";
import { Category } from "../../../model/Category";
import { Coupon } from "../../../model/Coupon";
import Customer from "../../../model/Customer";
import { theme } from "../../../theme";
import { CategoryFilter, CategoryFilterModel, Layout } from "../../items/filters/CategoryFilter";
import PriceFilter, { PriceFilterModel } from "../../items/filters/PriceFilter";

interface CustomerPageProps{
    customer:Customer;
    }

function UserPageCustomer (props: CustomerPageProps):JSX.Element{
    const [allCoupons, setAllCoupons] = useState<Coupon[]>([])
const [coupons, setCoupons] = useState<Coupon[]>(allCoupons);
const history = useHistory();

const onSubmitPrice: SubmitHandler<PriceFilterModel> = (data) => {
    CustomerAxios.getCustomerCouponsByMaxPrice(data.price).then(response => setCoupons(response.data))
}

const onSubmitCategory: SubmitHandler<CategoryFilterModel> = (data) => {
    if (data.category === "") {
        setCoupons(allCoupons);
    }
    else {
        CustomerAxios.getCustomerCouponsByCategory(data.category as Category).then(response => setCoupons(response.data))
    }
}

const getCustomerCoupons = ()=>{
    CustomerAxios.getCustomerCoupons()
    .then(res=> 
        {setAllCoupons(res.data)
         setCoupons(res.data)})
    .catch(err=>{console.log(err)})
}

useEffect(()=>{
    if (allCoupons.length === 0){
        getCustomerCoupons()
    }
},[])

    return(
        <div>
            {/* <UserPageHeader name={props.customer.firstName+" "+props.customer.lastName} email={props.customer.email}
            userPage={true}/> */}
            <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
            <TableHead> 
                <TableRow sx={{ bgcolor: theme.palette.primary.main, borderBottom: theme.shadows }}> 
                <TableCell/>
            <TableCell >title</TableCell>
            <TableCell align="center">category</TableCell>
            <TableCell align="center">expiration </TableCell>
            <TableCell align="center">amount</TableCell>
            <TableCell align="center">price</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {coupons.map(coupon => 
                    <TableRow key={coupon.id} onClick={()=> history.push({ pathname: "/coupon/:" + coupon.id, state: coupon })}>
                        <TableCell>
                            <Typography variant="overline">
                            <img src={coupon.image} height="100px" width="100px" />
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography variant="overline">
                                {coupon.title}  
                            </Typography>
                        </TableCell>
                        <TableCell align="center" >
                            <Typography variant="overline">
                                {coupon.category}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="overline">
                                {coupon.endDate}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="overline">
                                {coupon.amount}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography variant="overline">
                                {coupon.price} $
                            </Typography>
                        </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>

        <PriceFilter coupons={coupons} onSubmit={onSubmitPrice }/>
        <CategoryFilter layout={Layout.top} onSubmit={onSubmitCategory} />
        </div>
    )
    }

    export default UserPageCustomer;
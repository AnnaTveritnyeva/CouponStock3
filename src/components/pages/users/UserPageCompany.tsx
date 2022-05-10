import { Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { CompanyAxios } from "../../../axios";
import Company from "../../../model/Company";
import { Coupon } from "../../../model/Coupon";
import { theme } from "../../../theme";
import AddCouponForm from "../../forms/AddCouponForm";
import UpdateCouponForm from "../../forms/UpdateCouponForm";
import MyModal from "../../items/MyModal";

interface CompanypPageProps{
company:Company;
}

function UserPageCompany (props: CompanypPageProps):JSX.Element{
    const [coupons, setCoupons] = useState<Coupon[]>([])
const [addCouponOpen, setAddCouponOpen ] = useState<boolean>(false);
const [updateCouponOpen, setUpdateCouponOpen] = useState<boolean>(false);
const [couponToUpdate, setCouponToUpdate] = useState<Coupon>(new Coupon())

const openAddCoupon=()=>{
setAddCouponOpen(true)
}

const closeAddCoupon=()=>{
    setAddCouponOpen(false)
        }


const openUpdateCoupon=(coupon:Coupon)=>{
    setCouponToUpdate(coupon)
    setUpdateCouponOpen(true)

        }
    
        const closeUpdateCoupon=()=>{
            setUpdateCouponOpen(false)
                }

const getCompanyCoupons = ()=>{
    CompanyAxios.getCompanyCoupons()
    .then(res=> setCoupons(res.data))
    .catch(err=>{console.log(err)})
}

useEffect(()=>{
getCompanyCoupons()
},[])
    
    return(
        <div>
            Company Page
            <Button onClick={openAddCoupon}>
                Add 
            </Button>
        <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
            <TableHead>
                <TableRow>

                </TableRow>
            </TableHead>
            <TableBody>
                
                {coupons.map(coupon =>
                    <TableRow key={coupon.id}>
                        <TableCell align="center">
                            <Typography>
                                {coupon.title} 
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography>
                                {coupon.category}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography>
                                {coupon.startDate}
                            </Typography>
                        </TableCell>
                        <TableCell >
                            <Typography>
                                {coupon.endDate}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography >
                                {coupon.amount}
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Typography >
                                {coupon.price} $
                            </Typography>
                        </TableCell>
                        <TableCell align="center">
                            <Button onClick={()=>openUpdateCoupon(coupon)}>
                                Update
                            </Button>
                        </TableCell>
                        <TableCell align="center">
                        <Button >
                                delete
                            </Button>
                        </TableCell>

                    </TableRow>
                )}
            </TableBody>
        </Table>
      

        <MyModal open={addCouponOpen} close={closeAddCoupon} content={<AddCouponForm/>}/>
        <MyModal open={updateCouponOpen} close={closeUpdateCoupon} content = {<UpdateCouponForm coupon={couponToUpdate} />}/>
        
        </div>
    )
    }

    export default UserPageCompany;
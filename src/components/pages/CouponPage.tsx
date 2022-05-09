import { Button, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Redirect, useLocation } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import { GetCompanies, GetCoupons } from '../../redux/selector';
import { theme } from '../../theme';
import CouponItem from '../items/CouponItem';
import Page404 from './Page404';
import ChoosingLady from "../../assets/choosing.png"

const UseStyles = makeStyles({
    image: {
        backgroundColor: "white"
    },
    description: {
        marginBottom: theme.spacing(5)
    }

})

function CouponPage(): JSX.Element {
    const myCoupon: Coupon = useLocation().state as Coupon;
    const classes = UseStyles();
    
        return (
            <Grid container >
            <Grid item xs={12}>
                <Typography variant="h3">
                    {myCoupon.title}
                </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
                <img className={classes.image}
                    src={myCoupon.image} width="100%" 
                    alt={myCoupon.title}/>
            </Grid>
            <Grid item md={1}>

            </Grid>
            <Grid item xs={12} md={5}>
                <Typography
                    variant="h4">
                    {myCoupon.description}
                </Typography>
                <Typography variant="h6" fontWeight={theme.typography.fontWeightMedium}>
                    Category: {myCoupon.category}
                </Typography>
                <Typography variant="h6" fontWeight={theme.typography.fontWeightMedium}>
                    Deal Started: {myCoupon.startDate}
                </Typography>
                <Typography variant="h6" fontWeight={theme.typography.fontWeightMedium}>
                    Expiration Date: {myCoupon.endDate}
                </Typography>
                <Typography
                    variant="h6"
                    color={theme.palette.primary.dark}
                    align="center"
                    fontWeight={theme.typography.fontWeightMedium}
                >
                    {myCoupon.price} $
                </Typography>
                <Button
                    variant="contained"
                    fullWidth
                    size="large"
                >
                    Buy Now
                </Button>
                <Button
                    variant="contained"
                    size="large"
                    fullWidth>
                    Add To Cart
                </Button>
                <Typography align="center">
                    only {myCoupon.amount} left!
                </Typography>

            </Grid>
            <Grid item xs={12} md={8}>
                <Typography>
                    Another {GetCompanies().find(company => company.id === myCoupon.companyId)?.name} Coupons You May Like:
                </Typography>
                {GetCompanies()
                    .find(company => company.id === myCoupon.companyId)?.coupons.filter(coupon => coupon.id !== myCoupon.id)
                    .map(coupon =>
                            <CouponItem key={coupon.id} coupon={coupon} /> 
                          )}
            </Grid>
            <Grid item md={4} position="sticky" top="0" >
                    <img src={ChoosingLady} width="100%" />
            </Grid>
        </Grid>
        )
    }

export default CouponPage;
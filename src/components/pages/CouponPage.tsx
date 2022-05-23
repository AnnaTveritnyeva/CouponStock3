import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useHistory, useLocation } from 'react-router-dom';
import { Coupon } from '../../model/Coupon';
import { AddCouponToCart, GetCompanies, getUserRole } from '../../redux/selector';
import { theme } from '../../theme';
import CouponItem from '../items/CouponItem';
import ChoosingLady from "../../assets/choosing.png"
import { Role } from '../../model/Role';
import { CustomerAxios } from '../../axios';
import notify from '../../utils/Notify';
import { alpha } from '@material-ui/core';


const UseStyles = makeStyles({
    image: {
        backgroundColor: "white"
    },
    description: {
        marginBottom: theme.spacing(5)
    },
    choosingImg: {
        position: 'sticky',
        top: '0',
        [theme.breakpoints.down("lg")]:{
            display:'none'
        }
    }

})

function CouponPage(): JSX.Element {
    const myCoupon: Coupon = useLocation().state as Coupon;
    const classes = UseStyles();
    const history = useHistory()

    const purchaseCoupon = () => {
        let customer = getUserRole() === Role.CUSTOMER
        if (!customer) {
            history.push("/login")
        }
        if (getUserRole() === Role.CUSTOMER) {
            CustomerAxios.addPurchase(myCoupon)
                .then(res => { notify.success(myCoupon.title + " succssesfully purchased") })
                .catch(err => { notify.error(err.response.data) });
        }
    }


    return (
        <Grid container >
            <Grid item xs={12}>
                <Typography
                    variant="h3"
                    fontWeight={theme.typography.fontWeightMedium}
                    sx={{ marginBlock: theme.spacing(5) }}
                >
                    {myCoupon.title}
                </Typography>
            </Grid>


            <Grid item xs={12} md={6} >
                <img className={classes.image}
                    src={myCoupon.image} width="100%"
                    alt={myCoupon.title}
                />
            </Grid>
            <Grid item md={1}>

            </Grid>
            <Grid item xs={12} md={5}>
                <Typography
                    variant="h5"
                    fontStyle="italic"
                    gutterBottom
                    sx={{ marginBottom: theme.spacing(1) }}
                >
                    {myCoupon.description}
                </Typography>
                <Typography
                    variant="h4"
                    color={theme.palette.primary.dark}
                    align="right"
                    fontStyle="italic"
                    fontWeight={theme.typography.fontWeightMedium}
                    gutterBottom
                >
                    ONLY {myCoupon.price} $
                </Typography>

                <Typography
                    variant="h6"
                    fontWeight={theme.typography.fontWeightRegular}
                    sx={{ marginBottom: theme.spacing(10) }}
                >
                    Category: {myCoupon.category}
                    <br />
                    Deal Started: {myCoupon.startDate}
                    <br />
                    Expiration Date: {myCoupon.endDate}
                </Typography>

                <ButtonGroup
                    orientation='vertical'
                    variant='text'
                    fullWidth
                    sx={{
                        marginBottom: theme.spacing(1),
                        bgcolor: alpha(theme.palette.primary.contrastText, 0.5)
                    }}
                >
                    <Button
                        fullWidth
                        size="large"
                        sx={{
                            fontFamily: 'Kanit',
                            paddingInline: theme.spacing(2),
                            color: theme.palette.secondary.main,
                        }}
                        onClick={() => purchaseCoupon()}
                    >
                        <Typography
                            variant="h4"
                            fontWeight={theme.typography.fontWeightMedium}
                        >
                            buy now
                        </Typography>

                    </Button>
                    <Button

                        size="large"
                        sx={{
                            fontFamily: 'Kanit',
                            paddingInline: theme.spacing(1),
                            color: theme.palette.secondary.dark
                        }}
                        onClick={() => AddCouponToCart(myCoupon)}
                    >
                        <Typography variant="h4" fontWeight={theme.typography.fontWeightMedium}>
                            add to cart
                        </Typography>

                    </Button>
                </ButtonGroup>

                <Typography
                    variant="subtitle2"
                    align="center"
                >
                    only {myCoupon.amount} left!
                </Typography>

            </Grid>
            <Grid item xs={12}>
            <Typography
                variant='h5'
                fontWeight={theme.typography.fontWeightMedium}
                sx={{ marginTop: theme.spacing(10), marginBottom: theme.spacing(2) }}
            >
                Another {GetCompanies().find(company => company.id === myCoupon.companyId)?.name} Coupons You May Like:
            </Typography>
            </Grid>
            <Grid item xs={12} lg={8} >

                {GetCompanies()
                    .find(company => company.id === myCoupon.companyId)?.coupons
                    .filter(coupon => coupon.id !== myCoupon.id)
                    .map(coupon =>
                        <CouponItem key={coupon.id} coupon={coupon} />
                    )}
            </Grid>
            <Grid item lg={4}  >
                <div className={classes.choosingImg}>
                    <img src={ChoosingLady} width="80%" />
                </div>
            </Grid>
        </Grid>
    )
}

export default CouponPage;
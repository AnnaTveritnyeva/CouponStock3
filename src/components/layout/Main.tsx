import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { useContext, useEffect, useState } from 'react';
import { Redirect, Route, Switch, useHistory, useLocation} from 'react-router-dom';
import { GetCoupons } from '../../redux/selector';
import { theme } from '../../theme';
import AllCouponsPage from '../pages/AllCouponsPage';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CompanyPage from '../pages/CompanyPage';
import CouponPage from '../pages/CouponPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Page404 from '../pages/Page404';
import UserPage from '../pages/UserPage';

//1. see if better separate the routing logic from the main
//2. see if there a ,ore progrsive way to write the router

const UseStyles = makeStyles({
    container: {
        width: '100vw',
        minHeight: '100vh',
        paddingTop: theme.spacing(3),
        paddingBottom: '5%',
        backgroundColor: theme.palette.secondary.light
    },
    mainPageImageBox: {
        display: 'flex',
        justifyContent: 'center',
        //justifySelf:'center'
    },
    mainPageImage: {
        width: '100%',
        height: '400px',
        [theme.breakpoints.only("xs")]: {
            height: '180px'
        },
        [theme.breakpoints.only("sm")]: {
            height: '250px'
        },
        [theme.breakpoints.only("md")]: {
            height: '300px'
        },
        [theme.breakpoints.up("md")]: {
            height: '450px'
        },
        [theme.breakpoints.only("xl")]: {
            height: '600px'
        },

    },


})
function Main(): JSX.Element {
    const classes = UseStyles();
   const location = useLocation()
   
  
// useEffect(()=>{
// console.log("im here....")
// },[location.state])



    return (
      
            <Grid container className={classes.container}>
                {console.log(GetCoupons().length)}
            <Grid item xs={1} >
            </Grid>
            <Grid item xs={10} > 
            <Switch>
            <Route path="/home" component ={HomePage}  exact/>
            <Route path="/coupon/:couponId" component = {CouponPage} exact/>
            <Route path="/company/:companyName" component={CompanyPage} exact/>
            <Route path="/allCoupons" component={AllCouponsPage} exact/>
            <Route path="/user" component={UserPage} exact/>
            <Route path="/cart" component={CartPage} exact/>
            <Route path ="/category/:category" component={CategoryPage} exact/>
            <Route path="/login" component={LoginPage} exact/>
            <Redirect from="/" to="/home" exact />
            <Route component={Page404}/>
        </Switch>
                  
               
            </Grid>
            <Grid item xs={1} >
            </Grid> 
        </Grid>

    )
}

export default Main;
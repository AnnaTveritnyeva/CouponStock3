import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Redirect, Route, Switch} from 'react-router-dom';
import { theme } from '../../theme';
import LoginForm from '../forms/LoginForm';
import AllCouponsPage from '../pages/AllCouponsPage';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import CompanyPage from '../pages/CompanyPage';
import CouponPage from '../pages/CouponPage';
import HomePage from '../pages/HomePage';
import Page404 from '../pages/Page404';
import UserPage from '../pages/UserPage';

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


    return (
      
            <Grid container className={classes.container}>
            <Grid item xs={1}/>
            <Grid item xs={10} > 
            <Switch>
            <Route path="/home" component ={HomePage}  exact/>
            <Route path="/coupon/:couponId" component = {CouponPage} exact/>
            <Route path="/company/:companyName" component={CompanyPage} exact/>
            <Route path="/allCoupons" component={AllCouponsPage} exact/>
            <Route path="/user" component={UserPage} exact/>
            <Route path="/cart" component={CartPage} exact/>
            <Route path ="/category/:category" component={CategoryPage} exact/>
            <Route path="/login" component={LoginForm} exact/>
            <Redirect from="/" to="/home" exact />
            <Route component={Page404}/>
        </Switch>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    )
}

export default Main;
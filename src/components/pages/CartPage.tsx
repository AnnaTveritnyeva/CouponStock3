import { Button, Grid, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { useState } from 'react';
import { Coupon } from '../../model/Coupon';
import { deleteCouponFromCart } from '../../redux/actions/UserActions';
import { GetCartCoupons, getUserRole, Logout} from '../../redux/selector';
import store from '../../redux/store';
import { theme } from '../../theme';
import SingleCard from '../items/SingleCard';
import SidePhoto from "../../assets/sidephoto.svg"
import ClearIcon from '@mui/icons-material/Clear';
import LockIcon from '@mui/icons-material/Lock';
import LoginItem from '../items/LoginItem';
import { Role } from '../../model/Role';
import { CustomerAxios } from '../../axios';

function Cart(): JSX.Element {
    const [coupons, setCoupons] = useState<Coupon[]>(GetCartCoupons());
    const [openLogin, setOpenLogin] = useState<boolean>(false)

    const deleteCoupon = (couponId: number) => {
        store.dispatch(deleteCouponFromCart(couponId))
        setCoupons(GetCartCoupons())
    }

    function getPriceSum(): string {
        let sum = 0;
        coupons.map(coupon =>
            sum += coupon.price
        )
        return sum.toFixed(2);
    }

    const OpenLogin = () => {
        setOpenLogin(true)
    }

    const CloseLogin = () => {
        setOpenLogin(false)
    }

    const PurchaseCoupons = () =>{
        CustomerAxios.purchaseCoupons(GetCartCoupons())
        .then(()=>coupons.map(coupon=> deleteCoupon(coupon.id)))
        .catch(err=> {
            console.log(err)
            OpenLogin()
        })
    }


    return (
        <div className="CartPage">
            <Typography variant="h4" fontWeight={theme.typography.fontWeightBold} gutterBottom >
                Cart
            </Typography>
            <Grid container>
                <Grid item xs={12} md={7}>
                    <Table sx={{ bgcolor: theme.palette.primary.contrastText }}>
                        <TableHead>
                            <TableRow>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {coupons.map(coupon =>
                                <TableRow key={coupon.id}>
                                    <TableCell align="center">
                                        <img src={coupon.image} height="100px" width="100px" />
                                    </TableCell>
                                    <TableCell >
                                        <Typography>
                                            {coupon.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="center">
                                        <Typography >
                                            {coupon.price} $
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={() => deleteCoupon(coupon.id)}>
                                            <ClearIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item md={5}>
                    <SingleCard title="Total:" content={
                        <div>
                            <Typography>
                                total: {getPriceSum()} $
                            </Typography>
                            <Button
                                fullWidth
                                variant='contained'
                                size='large'
                                startIcon={<LockIcon />}
                                onClick={ getUserRole()=== Role.CUSTOMER? PurchaseCoupons: OpenLogin}
                            >
                                secure checkout
                            </Button>
                        </div>

                    } />
                    <img src={SidePhoto} width="100%" />
                </Grid>
            </Grid>

            <LoginItem open={openLogin} close={CloseLogin}/>


            {console.log(store.getState().user)}
            
        </div>
    ) 
}

export default Cart;
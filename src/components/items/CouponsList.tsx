import { Typography } from "@mui/material";
import Man from "../../assets/man.svg"
import { Coupon } from "../../model/Coupon";
import { theme } from "../../theme";
import CouponItem from "./CouponItem";

interface CouponsListProps {
    coupons: Coupon[];
}

function CouponsList(props: CouponsListProps): JSX.Element {
    return ( 
        <div>
            {props.coupons.length > 0 ? props.coupons.map(
                coupon =>
                    <span key={coupon.id}> <CouponItem coupon={coupon} /></span>
            ) :
                <div>
                    <Typography 
                    variant="h4" 
                    align="center" 
                    sx={{marginTop: theme.spacing(5)}}
                    >
                        Oops.. 
                        <br/>
                        It looks like there's no coupons here yet
                    </Typography>
                    <img src={Man} width="50%" alt=""/>
                </div>
            }
        </div>
    );
}

export default CouponsList;
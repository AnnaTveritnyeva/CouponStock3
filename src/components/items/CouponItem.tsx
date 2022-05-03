import React from 'react';
import { Coupon } from '../../model/Coupon';
import { AddCouponToCart } from '../../redux/actions/UserActions';
import store from '../../redux/store';
interface CouponItemProps{
    coupon:Coupon;
}

function CouponItem (props:CouponItemProps):JSX.Element{
    
return(
    <div>
        {props.coupon.title}
        <button onClick={() => store.dispatch(AddCouponToCart(props.coupon))}
        >
            Add To Cart
        </button>
    </div>
)
}

export default CouponItem ;
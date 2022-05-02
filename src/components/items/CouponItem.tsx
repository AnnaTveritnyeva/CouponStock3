import React from 'react';
import { Coupon } from '../../model/Coupon';
import { addCouponToCart } from '../../redux/actions/UserActions';
import store from '../../redux/store';
interface CouponItemProps{
    coupon:Coupon;
}

function CouponItem (props:CouponItemProps):JSX.Element{
    const addToCart = ()=>{
        if(!store.getState().user.couponsInCart.some(coupon => coupon === props.coupon) ){
            store.dispatch(addCouponToCart(props.coupon))
        }else{
            console.log("already added coupon to cart")
        }
    }
    
return(
    <div>
        {props.coupon.title}
        <button onClick={addToCart}
        >
            Add To Cart
        </button>
    </div>
)
}

export default CouponItem ;
import React, { useEffect, useState } from 'react';
import { Coupon } from '../../model/Coupon';
import store from '../../redux/store';

function Cart ():JSX.Element{
    const coupons:Coupon[] = store.getState().user.couponsInCart;

return(
    <div>
        <h1> Cart </h1>
        {coupons.map(coupon=>
           <div key={coupon.id}> {coupon.title} </div>
        )}
    </div>
)
}

export default Cart;
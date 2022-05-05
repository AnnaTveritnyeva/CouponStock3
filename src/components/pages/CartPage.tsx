import React, { useState } from 'react';
import { Coupon } from '../../model/Coupon';
import { deleteCouponFromCart } from '../../redux/actions/UserActions';
import { GetCartCoupons } from '../../redux/selector';
import store from '../../redux/store';

function Cart(): JSX.Element {
    const [coupons, setCoupons] = useState<Coupon[]>(GetCartCoupons());

    const deleteCoupon = (couponId: number) => {
        store.dispatch(deleteCouponFromCart(couponId))
        setCoupons(GetCartCoupons())
    }

    return (
        <div>
            <h1> Cart </h1>
            {coupons.map(coupon =>
                <span key={coupon.id}> {coupon.title}
                    <button onClick={() => deleteCoupon(coupon.id)}>
                        delete from cart
                    </button>
                    <br/>
                </span>
            )}
        </div>
    )
}

export default Cart;
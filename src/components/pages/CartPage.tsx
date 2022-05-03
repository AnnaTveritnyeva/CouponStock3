import React, { useState } from 'react';
import { Coupon } from '../../model/Coupon';
import { deleteCouponFromCart } from '../../redux/actions/UserActions';
import { getCouponsInCart } from '../../redux/selector';
import store from '../../redux/store';

function Cart(): JSX.Element {
    const [coupons, setCoupons] = useState<Coupon[]>(getCouponsInCart());

    const deleteCoupon = (couponId: number) => {
        store.dispatch(deleteCouponFromCart(couponId))
        setCoupons(getCouponsInCart())
    }

    return (
        <div>
            <h1> Cart </h1>
            {coupons.map(coupon =>
                <div key={coupon.id}> {coupon.title}
                    <button onClick={() => deleteCoupon(coupon.id)}>
                        delete from cart
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart;
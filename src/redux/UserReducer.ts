import Company from "../model/Company";
import { Coupon } from "../model/Coupon";
import { Role } from "../model/Role";
import { myAction } from "./actions/myAction";
import { UserActionType } from "./actions/UserActions";

export interface UserState {
    email?: string;
    role: Role;
    JWTtoken?: string;
    couponsInCart: Coupon[];
}

export const initialState: UserState = { role: Role.GUEST, couponsInCart:[] }


export function UserReducer(state: UserState = initialState, action: myAction): UserState {
    const newState: UserState = { ...state };
    switch (action.type) {
        case UserActionType.ADD_COUPON_TO_CART:
            newState.couponsInCart.push(action.payload)
            break;
        case UserActionType.DELETE_COUPON_FROM_CART:
            //code...
            break;
    }
    return newState;
}
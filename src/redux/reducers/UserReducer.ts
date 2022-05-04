import { Coupon } from "../../model/Coupon";
import { Role } from "../../model/Role";
import { myAction } from "../actions/myAction";
import { UserActionType } from "../actions/UserActions";

export interface UserState {
    role: Role;
    JWTtoken: string;
    couponsInCart: Coupon[];
}

export const initialState: UserState = { role: Role.GUEST, JWTtoken: "no-token", couponsInCart: [] }


export function UserReducer(state: UserState = initialState, action: myAction): UserState {
    const newState: UserState = { ...state };
    switch (action.type) {
        case UserActionType.LOGIN:
            const user: UserState = action.payload as UserState
            newState.JWTtoken = user.JWTtoken
            newState.role = user.role
            break;

        case UserActionType.LOGOUT:
            newState.role = Role.GUEST
            newState.JWTtoken = "no-token"
            break;

        case UserActionType.UPDATE_TOKEN:
            newState.JWTtoken = action.payload
            break;

        case UserActionType.ADD_COUPON_TO_CART:
            if (!newState.couponsInCart.some(coupon => coupon === action.payload)) {
                newState.couponsInCart.push(action.payload)
            }
            break;

        case UserActionType.DELETE_COUPON_FROM_CART:
            newState.couponsInCart = newState.couponsInCart.filter(coupon => coupon.id !== action.payload)
            break;
    }

    return newState;
}
import Company from "../model/Company";
import { Coupon } from "../model/Coupon";
import { GuestActionType } from "./actions/GuestActions";
import { myAction } from "./actions/myAction";

export interface GuestState {
    coupons: Coupon[];
    companies: Company[];
}

export const initialState: GuestState = { coupons: [], companies: [] }


export function GuestReducer(state: GuestState = initialState, action: myAction): GuestState {
    const newState: GuestState = { ...state };
    switch (action.type) {
        case GuestActionType.UPDATE_ALL_COUPONS:
            newState.coupons = action.payload
            break;
        case GuestActionType.UPDATE_ALL_COMPANIES:
            newState.companies = action.payload;
            break;
    }
    return newState;
}

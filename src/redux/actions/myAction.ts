import { GuestActionType } from "./GuestActions"
import { UserActionType } from "./UserActions"

export interface myAction {
    type:  GuestActionType | UserActionType
    payload?: any
}
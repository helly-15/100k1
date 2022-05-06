import { IUser } from "../interfaces/IUser";

export const CHANGE_USER_INFO = "CHANGE_USER_INFO";

export function userReducer(
    state: IUser= {
        email: '',
        uid: '',
        token: '',
    },
    action: { type: string; payload: IUser }
) {
    switch (action.type) {
        case CHANGE_USER_INFO:
            return {
                ...state,
                email: action.payload.email,
                uid: action.payload.uid,
                token: action.payload.token,
            };

        default:
            return state;
    }
}
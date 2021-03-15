import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI, ResultCodesEnum, ResultCodeCaptcha } from '../api/api';

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "CAPTCHA_URL";


let initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    authorized: false,
    captchaURL: null as string | null
};

type StateType = typeof initialState;

const authReducer = (state = initialState, action: SetUserDataActionType | SetCaptchaURLActionType): StateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload };
        case SET_CAPTCHA_URL:
            return { ...state, captchaURL: action.captchaURL };
        default:
            return state;
    }
};

type PayLoadDataType = {
    id: number | null,
    login: string | null,
    email: string | null,
    authorized: boolean,
}

type SetUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: PayLoadDataType
}

const setUserData = (id: number | null, login: string | null, email: string | null, authorized: boolean): SetUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: {
            id,
            login,
            email,
            authorized
        }
    }
};

type SetCaptchaURLActionType = {
    type: typeof SET_CAPTCHA_URL,
    captchaURL: string
}

const setCaptchaURL = (captchaURL: string): SetCaptchaURLActionType => {
    return { type: SET_CAPTCHA_URL, captchaURL }
};


export const getAuthData = () => (dispatch: any) => {
    return authAPI.getAuth()
        .then((data: any ) => {
            if (!data.resultCode) {
                const { id, login, email } = data.data;
                dispatch(setUserData(id, login, email, true));
            }
        });
};


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => async (dispatch: any) => {
    const data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === ResultCodesEnum.Success) {
        dispatch(getAuthData());
    } else {
        if (data.resultCode === ResultCodeCaptcha.CaptchaRequired) {
            dispatch(getCaptcha());
        }
        const msg = data.messages.length > 0 ? data.messages[0] : 'wrong auth data';
        dispatch(stopSubmit('login', { _error: msg }));
    }
};


export const logout = () => async (dispatch: any) => {
    const res = await authAPI.logout();
    if (res.data.resultCode === ResultCodesEnum.Success) {
        dispatch(setUserData(null, null, null, false));
    }
};


export const getCaptcha = () => async (dispatch: any) => {
    const res = await securityAPI.getCaptchaURL();
    const captchaURL = res.url;
    dispatch(setCaptchaURL(captchaURL));
};


export default authReducer;
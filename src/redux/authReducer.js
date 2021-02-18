import { stopSubmit } from 'redux-form';
import { authAPI, securityAPI } from '../api/api';

const SET_USER_DATA = "SET_USER_DATA";
const SET_CAPTCHA_URL = "CAPTCHA_URL";

let initialState = {
    id: null,
    login: null,
    email: null,
    authorized: false,
    captchaURL: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.payload };
        case SET_CAPTCHA_URL:
            return { ...state, captchaURL: action.captchaURL };
        default:
            return state;
    }
};


const setUserData = (id, login, email, authorized) => {
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


const setCaptchaURL = (captchaURL) => {
    return { type: SET_CAPTCHA_URL, captchaURL }
};


export const getAuthData = () => (dispatch) => {
    return authAPI.getAuth()
        .then(data => {
            if (!data.resultCode) {
                const { id, login, email } = data.data;
                dispatch(setUserData(id, login, email, true));
            }
        });
};


export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const res = await authAPI.login(email, password, rememberMe, captcha);
    if (!res.data.resultCode) {
        dispatch(getAuthData());
    } else {
        if (res.data.resultCode === 10) {
            dispatch(getCaptcha());
        }
        const msg = res.data.messages.length > 0 ? res.data.messages[0] : 'wrong auth data';
        dispatch(stopSubmit('login', { _error: msg }));
    }
};


export const logout = () => async (dispatch) => {
    const res = await authAPI.logout();
    if (!res.data.resultCode) {
        dispatch(setUserData(null, null, null, false));
    }
};


export const getCaptcha = () => async (dispatch) => {
    const res = await securityAPI.getCaptchaURL();
    const captchaURL = res.url;
    dispatch(setCaptchaURL(captchaURL));
};


export default authReducer;
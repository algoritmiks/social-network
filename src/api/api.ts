import axios from 'axios';
import { parametersAPI } from '../constants/constants'
import { ProfileType } from '../types/types'


const axiosRequest = axios.create({
    baseURL: parametersAPI.getBaseAPIURL(),
    withCredentials: true,
    headers: parametersAPI.getAPIKey()
});

export enum ResultCodesEnum {
    Success = 0,
    Error = 1,
}

export enum ResultCodeCaptcha {
    CaptchaRequired = 10
}

type GetAuthType = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCodesEnum
    messages: Array<string>
}

type LoginType = {
    data: {
        userId: number
    }
    resultCode: ResultCodesEnum | ResultCodeCaptcha
    messages: Array<string>
}

export const authAPI = {
    getAuth() {
        return axiosRequest.get<GetAuthType>('auth/me')
            .then(response => response.data);
    },

    login(email: string, password: string, rememberMe = false, captcha: null | string = null) {
        return axiosRequest.post<LoginType>('auth/login', { email, password, rememberMe, captcha })
            .then(res => res.data);
    },

    logout() {
        return axiosRequest.delete('auth/login')
    }
}

export const securityAPI = {
    getCaptchaURL() {
        return axiosRequest.get('security/get-captcha-url')
        .then(response => response.data);
    }
}


export const usersAPI = {
    getUsersProfile(userId: number) {
        console.warn('Obsolete method, please use profileAPI object')
        return profileAPI.getUsersProfile(userId);
    },

    getUsers(currentPage: number, pageSize: number) {
        return axiosRequest.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    setFollow(userId: number) {
        return axiosRequest.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },

    setUnfollow(userId: number) {
        return axiosRequest.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    }
}


export const profileAPI = {
    getUsersProfile(userId: number) {
        return axiosRequest.get(`profile/${userId}`);
    },

    getUserStatus(userId: number) {
        return axiosRequest.get(`profile/status/${userId}`);
    },

    updateUserStatus(status: string) {
        return axiosRequest.put('profile/status', {
            status: status
        });
    },


    uploadPhoto(file: any) {
        const formData = new FormData();
        formData.append("image", file);
        return axiosRequest.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfileData(formData: ProfileType) {
        return axiosRequest.put(`profile`, formData );
    }
}
import * as axios from 'axios';
import { parametersAPI } from '../constants/constants'


const axiosRequest = axios.create({
    baseURL: parametersAPI.getBaseAPIURL(),
    withCredentials: true,
    headers: parametersAPI.getAPIKey()
});


export const authAPI = {
    getAuth() {
        return axiosRequest.get('auth/me')
            .then(response => response.data);
    },

    login(email, password, rememberMe = false, captcha = null) {
        return axiosRequest.post('auth/login', { email, password, rememberMe, captcha })
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
    getUsersProfile(userId) {
        console.warn('Obsolete method, please use profileAPI object')
        return profileAPI.getUsersProfile(userId);
    },

    getUsers(currentPage, pageSize) {
        return axiosRequest.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    setFollow(userId) {
        return axiosRequest.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    },

    setUnfollow(userId) {
        return axiosRequest.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode;
            });
    }
}


export const profileAPI = {
    getUsersProfile(userId) {
        return axiosRequest.get(`profile/${userId}`);
    },

    getUserStatus(userId) {
        return axiosRequest.get(`profile/status/${userId}`);
    },

    updateUserStatus(status) {
        return axiosRequest.put('profile/status', {
            status: status
        });
    },


    uploadPhoto(file) {
        const formData = new FormData();
        formData.append("image", file);
        return axiosRequest.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfileData(formData) {
        return axiosRequest.put(`profile`, formData );
    }
}
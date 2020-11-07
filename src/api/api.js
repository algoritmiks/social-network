import * as axios from 'axios';
import { getBaseAPIURL, getAPIKey } from '../constants/constants'


const axiosRequest = axios.create({
  baseURL: getBaseAPIURL(),
  withCredentials: true,
  headers: getAPIKey()
});



export const authAPI = {
  getAuth() {
    return axiosRequest.get('auth/me')
      .then( response => response.data);
  }
}



export const usersAPI = {
  getUsersProfile(userID) {
    return axiosRequest.get(`profile/${userID}`);
  },

  getUsers(currentPage, pageSize) {
    return axiosRequest.get(`users?page=${currentPage}&count=${pageSize}`)
      .then( response => response.data);
  },

  setFollow(userID) {
    return axiosRequest.post(`follow/${userID}`)
      .then( response => {
        return response.data.resultCode;
      });
  },
  
  setUnfollow (userID) {
    return axiosRequest.delete(`follow/${userID}`)
      .then(response => {
        return response.data.resultCode;
      });
  }
}
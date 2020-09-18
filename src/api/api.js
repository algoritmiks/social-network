import * as axios from 'axios';
import { getBaseAPIURL, getAPIKey } from '../constants/constants'


const axiosRequest = axios.create({
  baseURL: getBaseAPIURL(),
  withCredentials: true,
  headers: getAPIKey()
});

export const getUsers = (currentPage, pageSize) => {
  return axiosRequest.get(`users?page=${currentPage}&count=${pageSize}`)
    .then( response => response.data);
}

export const getAuth = () => {
  return axiosRequest.get('auth/me')
    .then( response => response.data);
}

export const setFollow = (userID) => {
  return axiosRequest.post(`follow/${userID}`)
    .then(response => response.data.resultCode);
}

export const setUnfollow = (userID) => {
  return axiosRequest.delete(`follow/${userID}`)
    .then(response => response.data.resultCode);
}



import {createSelector} from 'reselect';
import {AppStateType} from '../redux/reduxStore';

const getUsers = (state: AppStateType) => {
  return state.usersComponent.users
}

export const getUsersFromState = createSelector(getUsers, (users) => {
  return users.filter(user => true);
})


export const getPageSizeFromState = (state: AppStateType) => {
  return state.usersComponent.pageSize
}

export const getTotalUsersFromState = (state: AppStateType) => {
  return state.usersComponent.totalUsers
}

export const getCurrentPageFromState = (state: AppStateType) => {
  return state.usersComponent.currentPage
}

export const getIsLoadingFromState = (state: AppStateType) => {
  return state.usersComponent.isLoading
}

export const getFollowingInProgresFromState = (state: AppStateType) => {
  return state.usersComponent.followingInProgres
}
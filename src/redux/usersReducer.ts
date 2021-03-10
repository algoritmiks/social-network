import { UserType } from '../types/types';
import { usersAPI } from '../api/api';



const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_LOADER = 'SET_LOADER';
const FOLLOWING_CHANGING = 'FOLLOWING_CHANGING';


let initialState = {
  users: [] as Array<UserType>,
  totalUsers: 0,
  pageSize: 5,
  currentPage: 1,
  isLoading: false,
  followingInProgres: []
};


const usersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: true };
          }
          return user;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            return { ...user, followed: false };
          }
          return user;
        })
      }
    case SET_USERS:
      return {
        ...state, users: action.users
      }
    case SET_CURRENT_PAGE:
      return {
        ...state, currentPage: action.currentPage
      }
    case SET_TOTAL_USERS:
      return {
        ...state, totalUsers: action.totalUsers
      }
    case SET_LOADER:
      return {
        ...state, isLoading: action.isLoading
      }
    case FOLLOWING_CHANGING:
      return {
        ...state, 
        followingInProgres: action.followingInProgres 
          ? [...state.followingInProgres, action.id]
          : state.followingInProgres.filter( el => el !== action.id)
      }
    default:
      return state
  }
}

type MakeFollowActionType = {
    type: typeof FOLLOW,
    userID: number
}
const makeFollow = (userID: number): MakeFollowActionType => ({ type: FOLLOW, userID: userID });

type MakeUnfollowActionType = {
    type: typeof UNFOLLOW,
    userID: number
}
const makeUnfollow = (userID: number): MakeUnfollowActionType => ({ type: UNFOLLOW, userID: userID });

type SetUsersActionType = {
    type: typeof SET_USERS,
    users: Array<UserType>
}
const setUsers = (users: Array<UserType>): SetUsersActionType => ({ type: SET_USERS, users });

type SetCurrentPageActionType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
export const setCurrentPage = (currentPage: number): SetCurrentPageActionType => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });

type SetTotalUsersActionType = {
    type: typeof SET_TOTAL_USERS,
    totalUsers: number
}
export const setTotalUsers = (totalUsers: number): SetTotalUsersActionType => ({ type: SET_TOTAL_USERS, totalUsers: totalUsers });

type SetLoadingActionType = {
    type: typeof SET_LOADER,
    isLoading: boolean
}
export const setLoading = (isLoading: boolean): SetLoadingActionType => ({ type: SET_LOADER, isLoading: isLoading });

type FollowingChangeActionType = {
    type: typeof FOLLOWING_CHANGING,
    followingInProgres: boolean,
    id: number
}
export const followingChange = (followingInProgres: boolean, id: number): FollowingChangeActionType => ({ type: FOLLOWING_CHANGING, followingInProgres, id});

export const getUsers = (currentPage: number, pageSize: number) => async(dispatch: any) => {
  dispatch(setLoading(true));
  dispatch(setCurrentPage(currentPage));
  const data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setLoading(false));
  dispatch(setUsers(data.items));
  dispatch(setTotalUsers(data.totalCount));
};


export const setUnfollow = (userId: number) => async (dispatch: any) => {
  dispatch(followingChange(true, userId));
  const resultCode = await usersAPI.setUnfollow(userId);
    
  if (resultCode === 0) {
    dispatch(makeUnfollow(userId));
  }
  dispatch(followingChange(false, userId));
}

export const setFollow = (userId: number) => async (dispatch: any) => {
  dispatch(followingChange(true, userId));
  const resultCode = await usersAPI.setFollow(userId)

  if (resultCode === 0) {
    dispatch(makeFollow(userId));
  }
  dispatch(followingChange(false, userId));
}


export default usersReducer;
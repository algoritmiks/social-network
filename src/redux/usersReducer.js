import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_LOADER = 'SET_LOADER';
const FOLLOWING_CHANGING = 'FOLLOWING_CHANGING';


let initialState = {
  users: [
    // { id: 1, avaSrc: '/img/girl1.jpg', follow: true, fullName: "Sveta", status: "free for chat", location: {country:"Russia", city: "Moscow"} },
    // { id: 2, avaSrc: '/img/ava.png', follow: false, fullName: "Misha", status: "free for chat", location: {country:"Russia", city: "Yaroslavl"} },
    // { id: 3, avaSrc: '/img/ava2.jpg', follow: false, fullName: "Dima", status: "free for chat", location: {country:"Russia", city: "Piter"} },
    // { id: 4, avaSrc: '/img/ava4.png', follow: true, fullName: "Katya", status: "learning", location: {country:"Russia", city: "Piter"} },
  ],
  totalUsers: 0,
  pageSize: 5,
  currentPage: 1,
  isLoading: false,
  followingInProgres: []
};




const usersReducer = (state = initialState, action) => {
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

const makeFollow = (userID) => ({ type: FOLLOW, userID: userID });

const makeUnfollow = (userID) => ({ type: UNFOLLOW, userID: userID });

const setUsers = (users) => ({ type: SET_USERS, users });

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage });

export const setTotalUsers = (totalUsers) => ({ type: SET_TOTAL_USERS, totalUsers: totalUsers });

export const setLoading = (isLoading) => ({ type: SET_LOADER, isLoading: isLoading });

export const followingChange = (followingInProgres, id) => ({ type: FOLLOWING_CHANGING, followingInProgres, id});

export const getUsers = (currentPage, pageSize) => (dispatch) => {
  dispatch(setLoading(true));
  dispatch(setCurrentPage(currentPage));

  usersAPI.getUsers(currentPage, pageSize).then(data => {
    dispatch(setLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsers(data.totalCount));
  });
};


export const setUnfollow = (userId) => (dispatch) => {
  dispatch(followingChange(true, userId));
  usersAPI.setUnfollow(userId)
    .then(resultCode => {
      if (resultCode === 0) {
        dispatch(makeUnfollow(userId));
      }
      dispatch(followingChange(false, userId));
    })
}

export const setFollow = (userId) => (dispatch) => {
  dispatch(followingChange(true, userId));
  usersAPI.setFollow(userId)
    .then(resultCode => {
      if (resultCode === 0) {
        dispatch(makeFollow(userId));
      }
      dispatch(followingChange(false, userId));
    })
}


export default usersReducer;
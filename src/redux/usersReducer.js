const SHOW_MORE = "SHOW-MORE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = "SET_TOTAL_USERS";

let initialState = {
    users: [
        // { id: 1, avaSrc: '/img/girl1.jpg', follow: true, fullName: "Sveta", status: "free for chat", location: {country:"Russia", city: "Moscow"} },
        // { id: 2, avaSrc: '/img/ava.png', follow: false, fullName: "Misha", status: "free for chat", location: {country:"Russia", city: "Yaroslavl"} },
        // { id: 3, avaSrc: '/img/ava2.jpg', follow: false, fullName: "Dima", status: "free for chat", location: {country:"Russia", city: "Piter"} },
        // { id: 4, avaSrc: '/img/ava4.png', follow: true, fullName: "Katya", status: "learning", location: {country:"Russia", city: "Piter"} },
    ],
    totalUsers: 0,
    pageSize: 5,
    currentPage: 1
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
        default:
            return state
    }
}

export const followActionCreator = (userID) => ( { type: FOLLOW, userID: userID } );
    
export const unfollowActionCreator = (userID) => ( {type: UNFOLLOW, userID: userID} );

export const setUsers = (users) => ( { type: SET_USERS, users } );

export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage: currentPage} );

export const setTotalUsers = (totalUsers) => ( {type: SET_TOTAL_USERS, totalUsers: totalUsers} );

export default usersReducer;
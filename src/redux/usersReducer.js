import {usersAPI} from "../API/api";


const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_FETCHING = "TOGGLE_IS_FOLLOWING_FETCHING"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return { ...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_FETCHING:
            return {...state, isFollowingInProgress: action.isFollowingInProgress
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id !== action.userId) }
        default:
            return state;
    }

}
export const followConfirm = (userId) => ({type: FOLLOW, userId});
export const unfollowConfirm = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const setIsFollowingInProgress = (isFollowingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_FETCHING, isFollowingInProgress, userId})

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize).then(response => {
            dispatch(setUsers(response.items));
            dispatch(setIsFetching(false));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response === 0) {
                    dispatch(unfollowConfirm(userId));
                }
                dispatch(setIsFollowingInProgress(false, userId))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setIsFollowingInProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response === 0) {
                    dispatch(followConfirm(userId));
                }
                dispatch(setIsFollowingInProgress(false, userId))
            })
    }
}

export default usersReducer;
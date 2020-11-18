export const getUsersFromState = (state) => {
  return state.usersComponent.users
}

export const getPageSizeFromState = (state) => {
  return state.usersComponent.pageSize
}

export const getTotalUsersFromState = (state) => {
  return state.usersComponent.totalUsers
}

export const getCurrentPageFromState = (state) => {
  return state.usersComponent.currentPage
}

export const getIsLoadingFromState = (state) => {
  return state.usersComponent.isLoading
}

export const getFollowingInProgresFromState = (state) => {
  return state.usersComponent.followingInProgres
}
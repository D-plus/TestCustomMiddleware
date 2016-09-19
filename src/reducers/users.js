export const users = (state, action) => {
  switch(action.type) {
    case 'FETCH_USERS':
      return [...state, ...action.data]

    default:
      return state || []
  }
}

                    // { dispatch } = state
export const async = ({ dispatch }) => next => action => { //eslint-disable-line no-unused-vars
  if ({}.toString.call(action.data).slice(8, -1) === 'Promise' && action.type === 'FETCH_USERS') {
    action.data
    .then(res => {
      dispatch({
        type: 'FETCH_USERS',
        data: res.data
      })
    })
    .catch(() => {
      dispatch({
        type: 'ERROR_FETCH_USERS'
      })
    })
  }
  next(action)
}

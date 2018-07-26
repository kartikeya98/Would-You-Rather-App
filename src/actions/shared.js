import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'
import recieveQuestions from './questions';





export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users,questions}) => {
        dispatch(receiveUsers(users))
        dispatch(recieveQuestions(questions))
        dispatch(hideLoading())
      })
  }
}
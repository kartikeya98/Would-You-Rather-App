import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { showLoading, hideLoading } from 'react-redux-loading'
import recieveQuestions from './questions';
import { _saveQuestionAnswer, _saveQuestion } from  '../utils/_DATA'


export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTON_ANSWER'
export const SAVE_QUESTION = 'SAVE_QUESTION'





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

function saveQAnswer ({ authedUser, qid, answer }) {
	return{
		type: SAVE_QUESTION_ANSWER,
		authedUser,
		qid,
		answer	
	}	
}

export function handleSaveAnswer(info){
	return (dispatch ) =>{
		dispatch(saveQAnswer(info))

		return _saveQuestionAnswer(info)
			
			.catch((e)=>{
				console.warn('Error in handleSaveAnswer:',e)
				dispatch(saveQAnswer(info))
				alert ('There was an error liking the answer. Try again ')	
			})
	}
}



function saveQuestion ({ id, timestamp, author,  optionOne, optionTwo}) {
	return{
		type: SAVE_QUESTION,
		id,
		timestamp,
		author,
		optionOne,
		optionTwo
	}	
}

export function handleSaveQuestion(question){
	return (dispatch ) =>{		
		dispatch(showLoading())
		return _saveQuestion (question)
			.then(res => dispatch(saveQuestion(res)))
			.then(()=> dispatch(hideLoading()))
			.catch((e)=>{
				console.warm('Error in handleSaveQuestion:',e)
				dispatch(saveQuestion(question))
				alert ('There was an error linking new question. Try again ')	
			})
	}
}
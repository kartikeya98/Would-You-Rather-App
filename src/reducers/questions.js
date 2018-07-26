import {GET_QUESTIONS} from '../actions/questions'
import {SAVE_QUESTION,SAVE_QUESTION_ANSWER} from '../actions/shared'


export default function questions (state = {} , action) {
    
switch(action.type) {
    case GET_QUESTIONS :
    return {
        ...state,
        ...action.questions
    }
    case SAVE_QUESTION_ANSWER: 
			return {
				...state,
				[action.qid]: {
			        ...state[action.qid],
			        [action.answer]: {
			        	...state[action.qid][action.answer],
			            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
			        }
			    }
			}
		case SAVE_QUESTION: 
			return {
				...state,
				[action.id]: {
					id:action.id, 
					timestamp: action.timestamp, 
					author:action.author, 
					optionOne: action.optionOne, 
					optionTwo: action.optionTwo
				}		    
			}
    default :
    {
        return state
    }
}
} 
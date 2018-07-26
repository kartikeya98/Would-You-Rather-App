import {GET_USERS} from '../actions/users'
import {SAVE_QUESTION,SAVE_QUESTION_ANSWER} from '../actions/shared'


export default function users (state = {} , action) {
    
switch(action.type) {
    case GET_USERS :
    return {
        ...state,
        ...action.users
    }
    case SAVE_QUESTION_ANSWER: 
			return {
				...state,
				[action.authedUser]: {
			        ...state[action.authedUser],
			        answers: {
			        	...state[action.authedUser].answers,
			            [action.qid]: action.answer
			        }
			    }
			}
		case SAVE_QUESTION: 
			return {
				...state,
				[action.author]: {
					...state[action.author],
					questions: state[action.author].questions.concat([action.id])
				}		    
			}
    default :
    {
        return state
    }
}
} 
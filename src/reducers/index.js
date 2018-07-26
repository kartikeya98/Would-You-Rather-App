import { combineReducers } from "../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux";
import users from './users'
import questions from './questions'
import authedUser from './autheduser'

export default combineReducers({
users,
questions,
authedUser,
})
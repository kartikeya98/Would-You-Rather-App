import React, { Component } from 'react';
import { connect } from 'react-redux'
import { 
  Route,
  Switch,
  Redirect 
} from "react-router-dom";
 import Poll from './poll'
 import QuestionsList from './questions-list'
 import NewPoll from  './newpoll'
import LeaderBoard from  './leaderboard'
import SignOut from './sign-out'
import '../css/home.css';

class UserHome extends Component {	
    
  	render() {

  		const { user, authedUser} = this.props
       console.log('Home render...')

      return (
    		<div className="home-title">
    			<h2>Would You Rather</h2>
    			<img 
				  	src={user.avatarURL} 
				  	alt="Avatar" 
				  	className='image-home'
				  	/>
		      <h5>Welcome,  {user.name}</h5>
                   
                    
          <Switch>    
                      
            <Route  path={`/${authedUser}/LeaderBoard`} component={LeaderBoard}/>
            <Route  path={`/${authedUser}/add`} component={NewPoll}/>   
            <Route  path={`/${authedUser}/questions/:questionId`} component={Poll}/> 
             <Route  path={`/${authedUser}/questions`} component={QuestionsList}/>
            <Route  path={`/${authedUser}/logout`}  component={SignOut}/>  
            <Redirect to="/404" />             
          </Switch>
        </div> 
    	)
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
  
  return {
    authedUser,
    user: users[authedUser]     
  };
}

export default connect(mapStateToProps)(UserHome);
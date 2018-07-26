import React, { Component} from 'react';
import { connect } from 'react-redux';
import '../css/leaderboard.css';

class LeaderBoard extends Component {	

  sortUsers = (array, answered, asked) => {

    array.map(userArray =>(
                    userArray["sum"]=(answered[userArray.id]+asked[userArray.id])      
              ))    
    array.sort( (a,b) => b.sum - a.sum )      
    return array
  } 


	render() {
    
    const {usersArray, usersAnswered, usersAsked} = this.props
    const usersSorted= this.sortUsers(usersArray,usersAnswered, usersAsked)
   
		return (
  		<div className="LeaderBoard-title">
  			<h2>LeaderBoard</h2>	    
        <table className="centerTable">
          <tbody>
            <tr className="data">
              <th>User's-Name</th>
              <th>User's-Picture</th>
              <th>Questions-asked</th>
              <th>Questions-answered</th>
              <th>Score</th>
            </tr>
           
            {usersSorted.map(usr =>(
                <tr>
                  <td>{usr.name}</td>
                  <td>
                    <img src={`${usr.avatarURL}`}  alt="avatar" height="25" width="25" /> 
                  </td>
                  <td>{usersAsked[usr.id]}</td>
                  <td>{usersAnswered[usr.id]}</td>
                  <td> {usersAsked[usr.id] + usersAnswered[usr.id]} </td>
                </tr>
              ))
            }            
          </tbody>
        </table>
      </div> 
  	)
	}
}

function mapStateToProps ({authedUser, users, questions}) {  
  
  const usersArray= Object.values(users)
  console.log(usersArray)
  
  return {
    authedUser,
    usersArray,
    usersAnswered: usersArray.reduce((acc, us) => {
                                                  acc[us.id]= Object.keys(us.answers).length
                                                  return acc 
                                                },[]),  
    usersAsked: usersArray.reduce((acc, us) => {
                                                  acc[us.id]= us.questions.length
                                                  return acc 
                                                },[]),   
  };
}


export default connect(mapStateToProps)(LeaderBoard);

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import '../css/questions.css';

class QuestionsList extends Component {	
    
    state = { 
      answered: false,
      showQuestionsList: true,
    };
    
    handleToogle = (e) => {
       e.preventDefault()
      this.setState(prevState => ({
        answered: !prevState.answered
      }));
    }
   
  	render() {
  		const { match, questionsNotAnswered, questionsAnswered} = this.props
      const {answered}= this.state
      const questionsList = answered ? questionsAnswered : questionsNotAnswered 
      questionsList.sort((a, b) => b.timestamp - a.timestamp)     

      return (
    		<div className="questions-container">
          <h2>Questions List</h2>
          
    			<button
            onClick={this.handleToogle}
            className='button-answered'
          >
            {answered
              ? <h3>answered</h3>
              : <h3>NOT answered</h3>
            }
          </button> 

          <ul className='questions-list'>
            {questionsList.map( q => 
            <div className="q_box">
            <h3> Would you Rather</h3>
                <li key={`q${q['id']}`}>
                  <Link to={`${match.url}/${q['id']}`}>
                    {q['optionOne'].text} / {q['optionTwo'].text}     
                  </Link>
                </li>
                </div> 
              )
            }            
          </ul>             
		    </div>
    	);
  	}
}

function mapStateToProps ({authedUser, questions, users}) {  
  const questionsArray= Object.values(questions)
  const answeredId = Object.keys(users[authedUser].answers)
  return {    
    questionsNotAnswered: questionsArray.reduce((acc, q)=> {
                      acc= answeredId.some( a => a===q.id)
                          ? acc
                          : acc.concat(q)
                      return acc          
                    },[]),
    questionsAnswered: questionsArray.reduce((acc, q)=> {
                      acc= answeredId.some( a => a===q.id)
                          ? acc.concat(q)
                          : acc
                      return acc          
                    },[]),     
  };
}


export default connect(mapStateToProps)(QuestionsList);

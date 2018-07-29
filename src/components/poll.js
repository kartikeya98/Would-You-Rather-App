import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/shared'
import '../css/poll.css';

class Poll extends Component {	

  handleVoteOption = (answer) => (e) =>{
    e.preventDefault()

    const {dispatch, authedUser, qId  }= this.props
    console.log( authedUser, qId, answer)

    dispatch(handleSaveAnswer({
      qid:qId,
      authedUser,
      answer,
    }))
      
    this.setState({
      isAnsweredState:true,
      answer,
    })
      
  } 

  render() {

 const { question,  isAnswered,  answer, votesOptionOne, votesOptionTwo,percentatgeOptionOne,percentatgeOptionTwo, avatarURLAuthor,} = this.props

    return (
      <div>
        {isAnswered ? (


            <div className="poll-container">
              <h5>These are the data for this poll</h5>
              
              <div className='poll-avatar'>
                  <img 
                  src={avatarURLAuthor} 
                  alt="Avatar" 
                  className='image-poll'
                  />
                </div>
                
                <div className={answer==="optionOne"? 'column select' :"column"}>
                  <h4>{question.optionOne.text}</h4>
                  <p>voted by</p>
                  <h3>{votesOptionOne} persons</h3>
                  <h1>{percentatgeOptionOne}%</h1>
                </div>
               
                <div className={answer==="optionTwo"? "column select" :"column"}>
                  <h4>{question.optionTwo.text}</h4>
                  <p>voted by</p>
                  <h3>{votesOptionTwo} persons</h3>
                  <h1>{percentatgeOptionTwo}%</h1>
                </div>
              

            </div>
          ):(
            <div className="poll-container">
              <h5>Would you rather?....</h5>
              <div className='poll-avatar'>
                  <img 
                  src={avatarURLAuthor} 
                  alt="Avatar" 
                  className='image-poll'
                  />
                </div>

                <div className="column one" onClick={this.handleVoteOption('optionOne')} >
                  <h3>{question.optionOne.text}</h3>
                </div>
              
                <div className="column two" onClick={this.handleVoteOption('optionTwo')}>
                  <h3>{question.optionTwo.text}</h3>
                </div>
            
              <p>please, select one and only one answer</p>          
            </div>
          )
        }
      </div>
    );
  }
}
      
  

function mapStateToProps ({authedUser, questions, users},{match}) {   
  const qId= match.params.questionId
  const question = questions[qId]
  const author= question.author
  const answersIdArray= Object.keys(users[authedUser].answers)
  const optionOneVotes = question.optionOne.votes   
  const optionTwoVotes = question.optionTwo.votes 
  const votesOptionOne = question.optionOne['votes'].length
  const votesOptionTwo = question.optionTwo['votes'].length

  return {
    qId,   
    question,
    users,
    authedUser,
    votesOptionOne,
    votesOptionTwo,
    avatarURLAuthor: users[author].avatarURL,
    isAnswered: (optionOneVotes.find(id => id===authedUser) || optionTwoVotes.find(id => id===authedUser)) ? true : false ,  
    answer: answersIdArray.some(answId => qId===answId) ? users[authedUser].answers[qId] : '', 
   
    percentatgeOptionOne: parseInt(votesOptionOne, 10)/(parseInt(votesOptionOne, 10)+parseInt(votesOptionTwo, 10))*100 ,
    percentatgeOptionTwo: parseInt(votesOptionTwo, 10)/(parseInt(votesOptionOne, 10)+parseInt(votesOptionTwo, 10))*100 ,
      
  };
}


export default connect(mapStateToProps)(Poll);
import React ,{Component} from 'react'
import {connect} from 'react-redux'
import { setAuthedUser } from '../actions/autheduser'
import { Route } from 'react-router-dom'
import UserHome from './userhome';
import '../css/sign-in.css'




 class SignIn extends Component {

    OnChange = (e,user) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(user.id));

        
        }
    render() {
        const {authedUser} = this.props;

        if(authedUser) {return <Route path={`/Home`} Component={UserHome} />}
    
        return (
            <div>

                    <div>
                        <img className="img_redux"
                        src={require('../images/redux.png')}
                        alt="redux"
                        />
                    </div>


            <div className="dropdown center">
             <h1 >Sign-In Page</h1>
                    <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Users
                     <span className="caret"></span></button>
                            <ul className="dropdown-menu">
                            {this.props.userIds.map((user) => (
                            <li key={user.id}>
                            <div  onClick={(e) => this.OnChange(e, user)}>
	  							<div >
								  <img className="img_px"
								  	src={user.avatarURL} 
								  	alt="Avatar" 
								
								  	/>
								  <div >
								  	<div > {user.name}</div>						    
								  </div>
								</div>
							</div>
                            </li>
                            ))}
                            </ul>
                </div>
                            </div>
           
            )
         }
    }

function mapStateToProps({users,authedUser}) {
    return {
        users,
        authedUser,
        userIds : Object.values(users)
    }
}



export default connect(mapStateToProps)(SignIn)
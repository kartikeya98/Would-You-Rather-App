import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import {LoadingBar} from 'react-redux-loading'
import Nav from './nav'
import { handleInitialData } from '../actions/shared'
import SignIn from './sign-in'
import Home from './home'
import UserHome from './userhome';

class App extends Component {
  componentDidMount() {
    this.props.Data()
   // this.props.dispatch(handleInitialData())
  }

  render() {
    const {authedUser} = this.props;
    return (
      <Fragment>
	    		<LoadingBar />	
	    		<Router>
	    		<div>
	    			<Route path="/" render={(props) => <Nav {...props} authedUser={authedUser} />} />   			    			    		
				    <Switch>					    
				         <Route path={`/${authedUser}`} component={UserHome}/>					  
						<Route path="/login" component={SignIn} />
						 <Route exact path="/" component={Home} />
						{/* <Route component={NoMatch} />					  */}
					</Switch>
				</div>				    
			    </Router>
		    </Fragment>
      
    );
  }
}

function mapStateToProps ({authedUser}) {  

  return {
    authedUser,        
  };
}

const mapDispatchToProps = dispatch => {
return {
  Data : () => dispatch(handleInitialData())
}
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

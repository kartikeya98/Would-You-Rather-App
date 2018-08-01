import React, { Component,Fragment } from 'react';
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import {LoadingBar} from 'react-redux-loading'
import Nav from './nav'
import { handleInitialData } from '../actions/shared'
import SignIn from './sign-in'
import UserHome from './userhome';
import Error from './error'

class App extends Component {
  componentDidMount() {
    this.props.Data()
   
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
            <Route exact path="/" component={SignIn} />			    
				    <Route path={`/${authedUser}`} component={UserHome}/>					
            <Route component={Error} />  
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

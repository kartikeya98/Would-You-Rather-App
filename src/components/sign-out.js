import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import {setAuthedUser} from '../actions/autheduser'


class SignOut extends Component {
    
        state = {
            navigate: false
        }
    

    componentDidMount(e) {
        return setTimeout(() => this.setState({ navigate: true }), 1500)      

    };

    render() {
        if (this.state.navigate) {
        	this.props.dispatch(setAuthedUser(null))        	
          	return <Redirect to="/" />
        }

        return (
          <div>You successfully logout</div>
        );
    }
}

export default connect()(SignOut);
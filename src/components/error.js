import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import '../css/error.css'

class Error extends Component {
    state = {
            navigate: false
        }
    

    componentDidMount(e) {
        return setTimeout(() => this.setState({ navigate: true }), 1500)      

    };

    render() {
        if (this.state.navigate) {        	      	
          	return <Redirect to="/" />
        }

        return (
          <div>
            
                <h1 className="hbar center">404</h1>
                <h3 className="hpar center">page not found</h3>
                <p className="hpar center">We are sorry but the page you are looking for does not exist.</p>
            </div>
        );
    }
}

export default connect()(Error);
import React from 'react';
import { Link } from "react-router-dom";
import '../css/nav.css';

export default function Nav({match, authedUser}) {
	
	if (authedUser) {
		return(
			<div>
				<nav  className="nav-fill">
					<ul className= "nav-nav">				
						<NavLink  to={`/${authedUser}/questions`}>Questions List</NavLink>
						<NavLink  to={`/${authedUser}/add`}>Add New poll</NavLink>
						<NavLink  to={`/${authedUser}/leaderboard`}>Leaderboard</NavLink>
						<p>{authedUser}</p>
						<NavLink  to={`/${authedUser}/logout`}>Log out</NavLink>
					</ul>
				</nav>	        
	    	</div>
		)
	}

	return (		
			<div>
				<nav  className="nav-fill">
					<ul className= "nav-nav">				
						<NavLink  to="/">Home</NavLink>
					</ul>
				</nav>	        
	    	</div>				
	)
}

const NavLink = (props) => (
  <li className ="nav-item">
    <Link {...props} style={{ color: 'inherit' }}/>
  </li>
)
import React from 'react'
import {Link} from 'react-router-dom'
const HomeComponent = () =>(
	<div>
		<h1>Home Page</h1>
		<Link to="/sign_in">Sign In</Link>
			<br/>		
			<hr/>		
		<Link to="/sign_up">Sign Up</Link>
		
	</div>
)

export default HomeComponent;
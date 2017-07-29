import React from 'react';
import BackLink from '../common/BackLink'
const sign_in =()=>{
	return (
		<div>
		<h1>Yuhaa Become member and create and share recipe </h1>
			 <label>Email:</label>
			 	<input type="text" name="email"/>
			 <br/>	
			 <label>Password:</label>
			 	<input type="password" name="password"/>
			 <br/>	

			 <label>Password Confirmation:</label>
			 	<input type="password" name="password_confirmation"/>
			 	<br/>
			 	<button>Start A Real Test</button>
			 	<br/>
			<BackLink href="/" text="Back"/>
		</div>
	)
}
export default sign_in;
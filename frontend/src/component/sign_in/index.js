import React from 'react'
import BackLink from '../common/BackLink'
const sign_up =()=>{
	return (
		<div>
		<h1>Huaaa Check new recipe</h1>
			 <label>Email:</label>
			 	<input type="text" name="email"/>
			 	<br/>
			 <label>Password:</label>
			 	<input type="password" name="password"/>

			<BackLink href="/" text="Back"/>
		</div>
	)
}
export default sign_up;

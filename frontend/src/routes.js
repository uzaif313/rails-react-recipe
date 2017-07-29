import React from 'react';
import {
				BrowserRouter as Router ,
				Route
			} from 'react-router-dom';
import HomeComponent from './component/HomeComponent'
import SignIn from './component/sign_in'
import SignUp from './component/sign_up'
const Routes = () =>{
	return (
		<Router>
			<div>
				<Route exact path="/" component={HomeComponent}/>
				<Route path="/sign_in" component={SignIn}/>
				<Route path="/sign_up" component={SignUp}/>
			</div>
		</Router>
	)	
}

export default Routes
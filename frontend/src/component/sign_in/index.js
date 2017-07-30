import React from 'react'
import BackLink from '../common/BackLink'
import Api from '../../utils/api'
class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			auth:{}
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		console.log(e.target.name)
		// this.setState({auth:{e.target.name:e.target.value}})
		console.log(this.state)
	}

	render() {
		return (
			<div>
			<h1>Huaaa Check new recipe</h1>
				<form action="javascript::void(0)" onSubmit={this.handleSubmit}>
				 <label>Email:</label>
				 	<input type="text" name="email" onChange={this.handleChange}/>
				 	<br/>
				 <label>Password:</label>
				 	<input type="password" name="password" onChange={this.handleChange}/>
				  <button>Sign in</button>	
				 </form>
					<BackLink href="/" text="Back"/>
			</div>
		)
	}

	handleSubmit(e){
		
	}
}
export default SignUp;
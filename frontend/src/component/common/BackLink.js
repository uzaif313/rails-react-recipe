import React from 'react';
import {Link} from 'react-router-dom'
const BackLink =(props)=>{
	return (
		<Link to={props.href}>{props.text}</Link>
	)
}
export default BackLink;
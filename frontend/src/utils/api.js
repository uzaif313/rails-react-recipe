import axios from 'axios';
import config from './config'
export default class Api{
	constructor() {
	 this.base_url = this.base_url.bind(this)
	}

	base_url(){
		return axios.create({
	  	baseURL:config['BASE_URL'],
		});
	}

	getTodos(){
			this.base_url().get('todo_users')
				   .then(function(response){
							console.log(response.data)
						}).catch(function(error){
							console.log(error);
		});
	}

	doLogin(data){
		// var params = new URLSearchParams();
		var params = {auth:{}};
		params['auth']['email'] = 'uzaif@gmail.com';  
		params['auth']['password'] = '123456';  

		this.base_url().post('user_token',params)
         .then(function(response){
						console.log(response)
					}).then(function(err){
						console.log(err)
					})
	}

}
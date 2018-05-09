import React from 'react';
import axios from 'axios';


export class PersonList extends React.Component{

	constructor(){
		super();
		this.state = {
			personList:[]
		};
	}
		

	componentDidMount(){
		axios.get(`https://jsonplaceholder.typicode.com/users`)
			 .then(res => {
		 //console.log(res);	 	
		 this.setState({personList:res.data}, function(){
		 	//console.log(this.state)
		 })	
			 });

	}

	render(){
		let personName = this.state.personList.map((user) => {
						 return (<p key={user.id}>{user.name}</p>)

			})


	return(
				
			<div>
			<h1>Person Name</h1>
			<hr/>
			{personName}
			</div>
		)
	}
}




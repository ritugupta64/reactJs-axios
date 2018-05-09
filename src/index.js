import React from 'react';
import {render} from 'react-dom';
import {Header} from './header';
import {Footer} from './footer';
import {PersonList} from './personList';
import {BrowserRouter as Router, NavLink, Link, Redirect, Prompt} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './index.css';

class App extends React.Component
{
	constructor(){
		super();
		this.state = {
			loggin:false
		}
	}
		
	

	handleLoginButton = () =>{
			this.setState(previousState =>({
				loggin:!previousState.loggin
			}))

	}


	render(){
		return(
			<Router>

<div className="container">
		
		
				
				<ul>
		<li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
		<li><NavLink to="/about/" exact activeStyle={{color:'green'}}>About</NavLink></li>
		<li><NavLink to="/footer/sarla" exact activeStyle={{color:'green'}}>Sarla</NavLink></li>
		<li><NavLink to="/footer/gupta" exact activeStyle={{color:'green'}}>Gupta</NavLink></li>
	</ul>
<input type="button" className="btn btn-primary" onClick={this.handleLoginButton.bind(this)} value={this.state.loggin?'log out' : 'log in'}/>
		<Route path="/" exact strict render={
			()=>{ 
				return <h1>Home Route</h1>
			}}/>

		<Route path="/about/" exact strict render={
			()=>{
				return <h1>About Route</h1>
			}}/>



		<Route path="/footer/:userName" exact strict render={
			({match})=>{
				return this.state.loggin?(<Footer userName={match.params.userName}/>):(<Redirect to="/" />)
			}}/>	
			
		<Prompt 
		when={!this.state.loggin}
		message={(location)=>{
			return location.pathname.startsWith('/footer')?'Are you sure':true
		}
}

		/>

	<Header/>
		<div className="row">
			<div className="col-xs-12">
				<p>This is the first example of Axios <small>Fetching data from Json</small></p>
				
				<hr/><br/>

				<PersonList />
			</div>
		</div>
	
</div>

</Router>
		)
	}
}

render(<App />, document.getElementById('root'));


import React from 'react';
import LandingForm from './LandingForm';
import Help from "./Help";

class Landing extends React.Component{
	constructor(props){
		super(props);
		let array = Object.keys(window.localStorage)
		this.state = {
			topicList: array,
			help: false  //false means the help is hidden
		}		
	}
	onSubmitLanding = () => {
		let array = Object.keys(window.localStorage)
		this.setState({
			topicList: array
		});
	}
	showHelp = () => {
		if(this.state.help){
			var landingHeader = document.getElementById("Landing-header")
			landingHeader.style.opacity = '0';
			var help = document.getElementById("help")	
			help.style.opacity = '1';
			this.setState({
				help: false
			});
		}
		else{
			var landingHeader = document.getElementById("Landing-header")
			landingHeader.style.opacity = '1';
			var help = document.getElementById("help")	
			help.style.opacity = '0';
			this.setState({
				help: true
			});
		}
	}
		render(){
			let array = Object.keys(window.localStorage)
		
		return(
			<div className = 'Landing'
					style = {{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						width: '90%',
						boxShadow: '2px, 2px',
					}}>
					<Help />
					<div id = 'Landing-header'>
						<h1 style = {{textAlign: 'center'}}> directory </h1>
						<p> Cannot accept duplicates... Seriously, don't try it. You'll delete the existing one</p>
					</div>
					<p style = {{cursor: "help"}} onClick= {this.showHelp}> Help? </p>
					<h3> Everything is saved to your browser (cookies) </h3>
					 <p> You currently have {array.length} topic(s). Scroll down if you can't find one</p>
					<LandingForm onSubmitLanding = {this.onSubmitLanding}/>
                    <ul className = "LandingList" 
                    	style = {{overflowY: 'scroll', width: '50%'}}>
                    	{array.map( (listName, i)=><li 
                    							      index = {i} 
                    							 	  key  = {listName} 
                    							 	  style = {{
            							 	  			display: 'flex',
            							 	  			flexDirection: 'row',
            							 	  			justifyContent: 'space-between',
            							 	  			fontSize: '20px',
                    							 	  }}>
                    										<a style = {{
                    												textDecoration: 'none',
                    											}}
                    											onClick = 
                    												{()=>{this.props.changeAppView(2, i)}} 			
                    											>
                    												{listName}
                    										 </a>
                    											<div id = "landing-button-container">
                    											<button
                    											onClick = {()=>{
    																		var change = prompt("What would you like to change " +`${listName}` + " to?");
    																		if (change == null || change == undefined || change ==+ "" ){}
																			else{
    																			let stor = window.localStorage.getItem(`${listName}`)
    																			window.localStorage.setItem(change, stor)
    																			window.localStorage.removeItem(`${listName}`)
    																		}
    																		this.onSubmitLanding();
                    													}}
                    											> edit </button>
                    											<button
                    													onClick = {()=>{
    																		window.localStorage.removeItem(listName);
    																		this.onSubmitLanding();
                    													}}
                    													style = {{
                    														backgroundColor: 'transparent',
                    														borderRadius: '25%',
                    													}}> {'x'} </button>
                    													</div>
                    								</li>
                    			)
                    	}
                    </ul>

			</div>
	)
	}
}
export default Landing;

/* 
clear all the entries
onClick={ ()=> {
                              let del = confirm("Are you sure you want to clear all?"); 
                              if (del == true){var twice = confirm("Are you REALLY sure you want to clear all?"); 
                              if(del === true && twice === true){
	                            window.localStorage.clear(); 
	                            location.reload();
	                            console.log('storage cleared')
	                            	}
                          		}
                         }}
                         */
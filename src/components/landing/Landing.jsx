import React from 'react';
import LandingForm from './LandingForm';

class Landing extends React.Component{
	constructor(props){
		super(props);
		let array = Object.keys(window.localStorage)
		this.state = {
			topicList: array
		}

		
	}
	onSubmitLanding = () => {
		let array = Object.keys(window.localStorage)
		this.setState({
			topicList: array
		});
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
						maxHeight: `${window.screen.availHeight-100}px`
					}}>
					<h1> directory </h1>
					<p> 1. topics should be one word (high level... school, basketball, job) </p>
					<p> these should be things that you do or think about eveyday </p>
					<p> 2. tasks should be actions related to the topic </p>
					<p> 3. items should be action items which need to be completed in order to complete the task </p>
					<p> Cannot accept duplicates... Seriously, don't try it. You'll delete the existing one</p>
					 <p> You currently have {array.length} topics. Scroll down if you can't find one</p>
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
                    							 	  }}
                    								>
                    										<a style = {{
                    												textDecoration: 'none',
                    											}}
                    											onClick = 
                    												{()=>{this.props.changeAppView(2, i)}}
                    													
                    											>
                    												{listName}
                    											</a>
                    											<button
                    													onClick = {()=>{
                    																		window.localStorage.removeItem(listName);
                    																		this.onSubmitLanding();
                    													}}
                    													style = {{
                    														backgroundColor: 'transparent',
                    														borderRadius: '25%',
                    													}}> {'x'} </button>
                    								</li>
                    			)
                    	}
                    </ul>

			</div>
	)
	}
}
export default Landing;
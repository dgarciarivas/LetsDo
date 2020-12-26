import React from 'react';

class LandingForm extends React.Component{
	constructor(props){
	         super(props);
	         this.state={
	                   newItem: '',
	                     } 
	                 }             
	    onChange=(event)=>{
	        this.setState({newItem: event.target.value});
	                }

	    onSubmit =(event)=>{
	        event.preventDefault(); 
	        if(this.state.newItem ==+ ''){
	          alert("Please enter a value");
					}
	        else{
		        window.localStorage.setItem(`${this.state.newItem}`, JSON.stringify([]));
		        this.setState({
		            newItem: '',
		        });
	            }
	            this.props.onSubmitLanding();
	          }
	             
	    render(){
		return(
		 <form className = 'textinput' onSubmit={this.onSubmit}>
                                <input    
                                  style= {{
                                            textAlign: 'center',
                                             backgroundColor: 'white',
                                              border: 'double',
                                              color: 'black',
                                              fontSize: '16px'
                                        }}     
                                        type = 'text'                          
                                    value={this.state.newItem} 
                                    placeholder = 'Add a Topic'
                                    onChange={this.onChange}
                        
                                />
                            </form>)
	    }

	    }


export default LandingForm
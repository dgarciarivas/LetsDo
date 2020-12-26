import React from 'react';


class TaskForm extends React.Component{
	constructor(props){
	         super(props);
	         this.state={
	                   newTask: '',
	                     } 
	        this.onChange = this.onChange.bind(this);
	        this.onSubmit = this.onSubmit.bind(this);
	                 }             
	    onChange(event){
	        this.setState({newTask: event.target.value});
	                }

	    onSubmit(event){
	        event.preventDefault(); 
	        if(this.state.newTask ==+ ''){
	          alert("Please enter a value");
					}
	        else{
	        	//TASK array values 
	        	let key = this.state.newTask;
	        	let started = 'started';
	        	let life = 'life';
	        	let time = 'time';

	        	//TASK object key values
	        	let startedOn  = new Date();
				let itemlife = 0;
	        	let timeworked = 0;



	        	let obj = {};
	        	obj[key] = []
	        	
	        	obj[started] = startedOn;
	        	obj[life] = itemlife; 
	        	obj[time] = timeworked;
	        	let retrieve = JSON.parse(window.localStorage.getItem(`${this.props.topic}`));
	        	let newArray = [...retrieve, obj];
		        window.localStorage.setItem(`${this.props.topic}`, JSON.stringify(newArray));
		        this.setState({
		            newTask: '',
		        });
		        	this.props.onSubmitRender(`${this.props.topic}`);
		      
	            }
	            
	          }
	             
	    render(props){
	    	
		return(
		 <form className = 'textinput' style = {{display: 'flex', justifyContent: 'center'}} onSubmit={this.onSubmit} >
                                <input    
                                  style= {{
                                            textAlign: 'center',
                                             backgroundColor: 'white',
                                              border: 'double orange',
                                              color: 'black',
                                              width: '75%',
                                              fontSize: '16px',
                                              borderRadius: '10px',
                                        }}     
                                        type = 'text'                          
                                    value={this.state.newTask} 
                                    placeholder = {`task for ${this.props.topic}`}
                                    onChange={this.onChange}
                                    onKeyDown = {(event)=>{ console.log(event)
										if (event.keyCode === 37 && event.shiftKey === true){
												this.props.changeTopic(0);}
											else if(event.keyCode === 39  && event.shiftKey === true){
												this.props.changeTopic(1)
											}
										}}
                        
                                />
                            </form>)
	    }

	    }


export default TaskForm
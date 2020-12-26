import React from 'react';


class ItemForm extends React.Component{
	constructor(props){
	         super(props);
	         this.state={
	                   newItem: '',
	                     } 
	        this.onChange = this.onChange.bind(this);
	        this.onSubmit = this.onSubmit.bind(this);
	                 }             
	    onChange(event){
	        this.setState({newItem: event.target.value});
	                }

	    onSubmit(event){
	        event.preventDefault();
	        if(this.state.newItem ===+ ''){
	          alert("Please enter a value");
					}
	        else{
	        	let listCopy = this.props.list;
	        	//ITEM object keys
	        	let key = 'name';
	        	let started = 'started';
	        	let life = 'life';
	        	let time = 'time';
	        	const day = 'day';
	        	const month = 'month';
	        	const year = 'year';
	        	const hour = 'hour';
	        	const min = 'min';
	        	const sec = 'sec';


	        	//ITEM object key values
	        	const startedOn = new Date();
	        	let timeworked = 0;

	        	let obj = {};
	        	obj[key] = this.state.newItem;
	        	obj[started] = startedOn;
	        	obj[time] = timeworked;

	        	listCopy = [...listCopy, obj];
	        	let topicCopy = JSON.parse(window.localStorage.getItem(`${this.props.topic}`));
	        	topicCopy[this.props.index][this.props.task] = listCopy;
	        	window.localStorage.setItem( `${this.props.topic}`, JSON.stringify(topicCopy));
		        this.setState({
		            newItem: '',
		        });
		        this.props.onSubmitRender(`${this.props.topic}`);
	            }
	          }
	             
	    render(){
			return(
		 			<form className = 'textinput' onSubmit={this.onSubmit}

		 						style = {{width: '100%', display: 'flex', justifyContent: 'center'}}>
                           		<input    
                                  style= {{
                                            textAlign: 'center',
                                             backgroundColor: 'white',
                                              border: 'double #FC4C02',
                                              color: 'black',
                                              width: '50%',
                                              fontSize: '16px',
                                              marginBottom: '10px',
                                              borderRadius: '5px',
                                        }}     
                                        type = 'text'                          
                                    value={this.state.newItem} 
                                    placeholder = {`item for ${this.props.task}`}
                                    onChange={this.onChange}
                        
                                />
                    </form>)
	    }

	    }


export default ItemForm
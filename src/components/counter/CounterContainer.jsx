import React from 'react';
import Counter from './Counter'

const CounterContainer =(props)=>{


		return(
			<div id='CounterContainer'
					style={{color: 'blue'}}> 
				<Counter  topic = {`${props.topic}`} time = {`${props.time}`} task = {`${props.task}`} taskIndex = {`${props.taskIndex}`} itemIndex = {`${props.itemIndex}`}/>
			</div>
		)
	}




export default CounterContainer;
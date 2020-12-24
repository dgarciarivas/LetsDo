import React from 'react';
import Life from './Life';
import CounterContainer from '../counter/CounterContainer';

const ItemTile = (props)=>{
	 let bumpItemIndex = (isUP)=>{
	 	var copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));	
			var list2Edit = copyTopic[props.taskIndex][props.task];
		if (isUP) {
			if(props.index > 0){
				let targetIndex = props.index-1;
				let upper = list2Edit[targetIndex];
				let lower = list2Edit[props.index];
				list2Edit.splice(targetIndex, 2, lower, upper);	
					}
		}
	 else if (props.index < list2Edit.length-1 && !isUP){
			console.log('wanted to bump down from ', props.index, 'to ', Number(props.index+1)) 
			let targetIndex = Number(props.index)+1;
			let lowerIndexValue = list2Edit[props.index];
			let higherIndexValue = list2Edit[targetIndex];
			console.log(lowerIndexValue, higherIndexValue);
			list2Edit.splice(props.index, 2, higherIndexValue, lowerIndexValue);
			console.log(list2Edit)
		}
		copyTopic[props.taskIndex][props.task] = list2Edit;
		window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic));
		props.onSubmitRender(props.topic);
	}
  
	let itemMoverStyle = {
			fontSize: '10px',
			cursor: 'pointer',
	}

	return(
			<div className = 'ItemTile'
				 style = {{
				 		display: 'flex', 
				 		flexDirection: 'row',
				 		alignItems: 'center',
				 		paddingTop: '5px',
				 		borderBottom: 'double black',
				 		justifyContent: 'space-evenly',
				 		}}
			>
				<div className = 'item-mover-container'
					 style = {{
					 		display: 'flex', 
					 		flexDirection: 'column',
					 		flexGrow: 1,
					 	}}
				>
					<button onClick = {()=>{bumpItemIndex(true)}} style = {itemMoverStyle}>/\</button>
					<button onClick = {()=>{bumpItemIndex(false)}} style = {itemMoverStyle}>\/</button>
				</div>
				<div className = 'itemName'
					  style = {{
					  		flexGrow: 100, 
					  		paddingLeft: '10px',
					  		color: 'black',
					  }}
					  onClick = {
					  	(event)=>{
					
					      	if(event.shiftKey === false){
					  		var color = event.target.style.color; 
					  	 	if(color === 'black'){event.target.style.color = 'orange'} 
					  	 	else if(color === 'orange'){event.target.style.color = 'red'}
					  	 	else if(color === 'red'){event.target.style.color = 'black'}
					  	 	else {event.target.style.color = 'black'}
					     	 }
					     	else{
					     		var change  = prompt('What did you want to put?')
					     		let copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));									
								let list2Edit = copyTopic[props.taskIndex][props.task];
								console.log(JSON.stringify(list2Edit))
								list2Edit[props.index]['name'] = change;
								copyTopic[props.taskIndex][props.task] = list2Edit;
								console.log(copyTopic)
								window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic));
								props.onSubmitRender(props.topic);							
					     	}
							}
					  	 }>
					{JSON.parse(window.localStorage.getItem(`${props.topic}`))[props.taskIndex][props.task][props.index]['name']}
				</div>
				<div id = 'timeManagment'>
					<Life  Life = {`${props.life}`}
							started  = {`${props.started}`}
					/>
				</div>
				<button className = 'removeItemButton'
						style = {{flexGrow: 1}}
						onClick = {
									()=>{
											let copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));									
											let list2Edit = copyTopic[props.taskIndex][props.task];
											let removed = list2Edit.splice(props.index, 1);
											copyTopic[props.taskIndex][props.task] = list2Edit;
											window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic));
											props.onSubmitRender(props.topic);
										}
								}
				>
					{'x'}
				</button> 
			</div>
	)
}

export default ItemTile;
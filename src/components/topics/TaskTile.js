import React from 'react';
import ItemForm from './ItemForm';
import ItemTile from './ItemTile';
import Life from "./Life";

const TaskTile = (props)=>{
	let bumpItemIndex = (isUP)=>{
	 	var copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));	
	 	console.log(copyTopic, props)
			var list2Edit = copyTopic;
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
		window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic));
		props.onSubmitRender(props.topic);
	}
  
	let itemMoverStyle = {
			fontSize: '10px',
			cursor: 'pointer',
			width: '20px',
			height: '20px',
			borderRadius: '5px',
	}
	return(
			<div className = 'TaskTile' 
				 id = {props.id}
				 draggable = "true"
				 onDragStart = {(event)=>{
				 						 console.log('task Dragged from index', props.index);
				 						 var data = new DataTransfer();
				 						 event.dataTransfer.setData("text", `${props.index}`);
				 						}
				 				}
				onDragOver = {(event)=>{
										console.log('task entered a valid drop point at task tile', props.taskName, ' at index', props.index);
										event.preventDefault();
										document.getElementById(`${props.taskName}+${props.index}`).style.backgroundColor = '#005778';
								
										}
								} 	
				// onDragEnter = {()=>{
											
				// 						}
				// 			}			
				onDragLeave = {(event)=>{
											document.getElementById(`${props.taskName}+${props.index}`).style.backgroundColor = '#f9f9f9';
										}
							}			
				 onDrop = {(event)=>{
				 						 console.log('task was dropped off at a valid drop point', props.index);
				 						 let originIndex = event.dataTransfer.getData('text')
				 						 let targetIndex = props.index;
				 						 let copy = JSON.parse(window.localStorage.getItem(`${props.topic}`));
				 						 console.log(copy);
				 						 let placer = copy[targetIndex];
				 						 console.log('moving task', copy[originIndex]);
				 						 console.log('placed on task', placer);
				 						 copy[targetIndex] = copy[originIndex];
				 						 copy[originIndex] = placer;
				 						 console.log(copy);
				 						window.localStorage.setItem(`${props.topic}`, JSON.stringify(copy));
				 						 props.onSubmitRender(props.topic)
				 						 document.getElementById(`${props.taskName}+${props.index}`).style.backgroundColor = '#f9f9f9';
				 						 event.dataTransfer.clearData();
				 						}
				 			}
				 
				 style ={{
                            display: 'flex',
                            margin: '20px',
                            padding: '10px',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            height: '450px',
                            width: '350px',
                            color: 'white',
                            backgroundColor: "#f9f9f9",
                            borderRadius: '10px', 
                      
                          }}>
					<div className = "header-of-tasktile" 
						style = {{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
								alignItems: 'center',
								textAlign: 'center', 
								fontSize: '25px',
								 borderBottom: 'double black',
								 width: '90%',

								}}>
								<button onClick = {()=>{bumpItemIndex(true)}} style = {itemMoverStyle}>{'<'}</button>
						<div style = {{display: 'flex'}}>
							<div onClick = {()=>{
									var change = prompt("What would you like to change " +`${props.taskName}` + " to?");
									if (change == null || change == undefined || change ==+ ""){
									}
									else{
									let copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));
									let copiedTask = copyTopic[props.index][`${props.taskName}`]
									let obj = {};
	        						obj[change] = copiedTask;
									let removedTask = copyTopic.splice(props.index, 1);  
									copyTopic.splice(props.index, 0, obj);
									window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic))
								}
									props.onSubmitRender(props.topic);


								
								}}
                    				style = {{ padding: '10px', color: 'black'}}>{props.taskName}</div>
							<button id = 'removeTaskButton'
							   onMouseEnter = {(event)=>{
                                    event.target.style.backgroundColor = 'red';
							   }}
							   onMouseLeave = {(event)=>{
                                    event.target.style.backgroundColor = 'green';
							   }}
								onClick = {()=>{
									console.log('removed', props.taskName)
									let copyTopic = JSON.parse(window.localStorage.getItem(`${props.topic}`));
									console.log(copyTopic);
									let removedTask = copyTopic.splice(props.index, 1);
									console.log(copyTopic);
									window.localStorage.setItem(`${props.topic}`, JSON.stringify(copyTopic));
									props.onSubmitRender(props.topic);
								}}
								style = {{ borderRadius: '10px',
								           borderColor: 'none', 
										   height: '20px',
										   width: '20px',
										   alignSelf: 'center',
										   textAlign: 'center', 
										   backgroundColor: 'green'}}
								>
								{''}
							</button> 
							</div>
							<button onClick = {()=>{bumpItemIndex(false)}} style = {itemMoverStyle}>{'>'}</button>
						</div>
						<ItemForm 
							topic = {props.topic} 
							task = {props.taskName}  
							index = {props.index} 
							list = {props.list}  
							onSubmitRender = {props.onSubmitRender} 
						/>
						
					{/*<Life  Life = {`${JSON.parse(window.localStorage.getItem(props.topic))[props.index].life}`}
							started  = {`${JSON.parse(window.localStorage.getItem(props.topic))[props.index].started}`}
					/>*/}
					<div className = "body-of-tasktile" 
						style = {{overflow: 'scroll', width: '90%'}} >
						{props.list.map((d, i)=>  <ItemTile key = {`${d}+${i}`} 
															itemName = {`${d.name}`} 
															itemData = {`${d.name}`} 
															index = {`${i}`} 
															started = {`${d.started}`}
														
															time = {`${d.time}`}
															task = {props.taskName} 
															topic = {props.topic} 
															taskIndex = {props.index}
															onSubmitRender = {props.onSubmitRender}
															

													/>)
						}
					</div>
			</div>
	)
}

export default TaskTile;
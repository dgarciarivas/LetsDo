import React from 'react';
import TaskForm from './TaskForm';
import Clock from '../clock/Clock'


const TopicHeader = (props)=>{
	var width = String(window.screen.width);
	return(
		<div className = 'TopicHeader' 
			 style = {{
			 		display: 'flex', 
			 		flexDirection: 'row', 
			 		backgroundColor: 'black', 
			 		width: '98%', 
			 		maxWidth: `${width}px`,
			 		maxHeight: '20%',
			 		position: 'fixed', 
			 		borderRadius: '10px', 
			 		}}
		>
		<div className = 'back2LandingButtonContainer'
			style = {{flexGrow: 1, 
					  display: 'flex',
						alignItems: 'center',}}	
		>
			<button className  = 'back2LandingButton'
					onClick  ={()=>{props.changeAppView(1, undefined)}} 
					style = {{
						cursor: 'pointer',
						fontSize: 'large',
						backgroundColor: 'transparent',
						borderRadius: '10px',
						marginLeft: '20px',
						boxShadow: '0px 3px 0px 3px',
						color: '#f9f9f9',

					}}
			>		
					{'Index'}
			</button>
		</div>
			<div className = 'topic-nav-container'
				 style= {{
				 		display: 'flex', 
				 		flexGrow: 1, 
				 		alignItems: 'center',
				 		justifyContent: 'center',
				 	}}
			>
				<div className = 'topic-nav'
					 style = {{
					 		display: 'flex', 
					 		flexGrow: 10,
					 		flexDirection: 'column', 
					 		alignItems: 'center', 
					 		justifyContent: 'space-around',  
					 	}}
				> 
					
					<div className = "topic-and-topicForm-container" 
						 style = {{
						 		display: 'flex',
						 		flexDirection: 'column',
						 		justifyContent: 'center'
						 }}>
						<div className = "topic-name" 
							onClick = {
									()=>{let clearAll = confirm('clear '+`${props.topic}`+'?');
												if(clearAll){props.clearTopic(props)
										props.onSubmitRender(props.topic)}
									}}
						 	 style = {{
							 	 textAlign: 'center', 
							 	 fontSize: 'xx-large', 
							 	 alignItems: 'center',
							 	 color: '#f9f9f9',
							 }}
						>	
							{props.topic}
						</div>
						<TaskForm 
							topic = {props.topic} 
							onSubmitRender = {props.onSubmitRender} 
							changeTopic = {props.changeTopic}
						/>	
					</div>
					<div>
						<button
					 		onClick = {()=>props.changeTopic(0)}
					>
					 	{'<'}
					</button>
					<button 
							onClick = {()=>props.changeTopic(1)}
					>
							{'>'}
					</button>
					</div>
				</div>

				
			</div>

			
			<div id = 'clock-container' style = {{flexGrow: 1, display: 'flex', justifyContent: 'flex-end', paddingRight: '10px',}}><Clock /></div>
			
		</div>

	)

}

export default TopicHeader
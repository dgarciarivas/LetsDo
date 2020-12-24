import React from 'react';
import ItemForm from './ItemForm';
import ItemTile from './ItemTile';

const TaskTile = (props)=>{
	const TaskTileStyles = {
		display: 'flex',
        margin: '20px',
        padding: '10px',
        flexDirection: 'column',
        alignItems: 'center',
        borderStyle: 'double',
        borderRadius: '5%',
        borderColor: 'gold',
        position: 'relative',
        height: '450px',
        width: '350px',
	}

	const HeaderOfTasktileStyles = {
		textAlign: 'center', 
		fontSize: '25px'
	}
	return(
		<div 
			className='TaskTile' 
			style={TaskTileStyles}
		>
			<div 
				className="header-of-tasktile" 
				style={HeaderOfTasktileStyles} 
			>
				<div>
					{props.taskName}
					<button 
						onClick={()=>props.changeTopic(1)}
					>
						{'>'}
					</button>
				</div>
				<ItemForm 
					topic={props.topic} 
					task={props.taskName}
					index={props.index}
					list={props.list}  
					onSubmitRender={props.onSubmitRender} 
				/>
			</div>
			<div 
				className="body-of-tasktile" 
				style={{overflow: 'scroll', width: '90%'}} 
			>
				{/*  here should be displayed the list of items in a task*/}
	
				{
					props.list.map((d, i) => {
						return (
							<ItemTile 
								key={`${d}+${i}`} 
								item={`${d}`} 
								index={`${i}`} 
								task={props.taskName} 
								topic={props.topic} 
							/>
						)
					})
				}
				
			</div>
		</div>
	)
}

export default TaskTile;
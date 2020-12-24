import React from 'react';
import TaskTile from './TaskTile';


const TopicBody = (props)=>{

	return(
		<div className = "TopicBody"  //style = {{display: 'flex', flexDirection: 'row',  ,overflowX: 'scroll'}}  
			 style={{
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'nowrap',
					justifyContent: 'space-evenly',
					position: 'absolute',
					maxHeight: '525px',
					top: '175px',
					left: '20px',					
					overflowX: 'scroll',
					overflowY: 'hidden',
                     }}
         >
			{props.taskNames.map((d, i)=><TaskTile 
													id = {`${d}+${i}`}
												key = {`${d}+${i}`} 
												taskName = {`${d}`} 
												index = {`${i}`} 
												list = {props.itemLists[i]} 
												topic = {props.topic}
												started = {props.started} 
												onSubmitRender = {props.onSubmitRender} 
										/>
								)
			}
		</div>
	)

}
export default TopicBody;
import React from 'react';
import Landing from './landing/Landing';
import Topics from './topics/Topics';


const AppContent = (props) =>{
	
		switch(props.view){
			case 1: 
				return(
						<Landing changeAppView = {props.changeAppView} />
				)
				break;
			case 2: 
				return(
						<Topics 
							changeAppView = {props.changeAppView} 
							topicIndex = {props.topicIndex}

							 />
							
				)
				break;
		}
}

export default AppContent
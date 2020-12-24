import React from 'react';
import TopicBody from './TopicBody';
import TopicHeader from './TopicHeader';

class Topics extends React.Component{

	constructor(){
		super();
		this.state = {
			index: undefined,
			topic: '',
			taskNameList: [],
			itemsList: [],

		}
	}
	changeTopic = (num)=>{
		let index =this.state.index;
		if(num === 1 && index < window.localStorage.length-1){
			index++;
			let arrayOfTopics = Object.keys(window.localStorage)
			let topicCopy = JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))
			let length = topicCopy.length
			let taskNameArray = [];
			let taskListArray = [];
			for(let i=0;i<length;i++){
				let additionName = Object.keys(JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))[i])[0];
				taskNameArray = [...taskNameArray, additionName];	
				let additionList = JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))[i][taskNameArray[i]];
				taskListArray = [...taskListArray, additionList];
				}
		this.setState({
			taskNameList: taskNameArray,
			itemsList: taskListArray,
			topic: arrayOfTopics[index],
			index: index,
						});
		}
		else if(num === 0 && index > 0){
			index--;
			let arrayOfTopics = Object.keys(window.localStorage)
			let topicCopy = JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))
			let length = topicCopy.length
			let taskNameArray = [];
			let taskListArray = [];
			for(let i=0;i<length;i++){
				let additionName = Object.keys(JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))[i])[0];
				taskNameArray = [...taskNameArray, additionName];	
				let additionList = JSON.parse(window.localStorage.getItem(`${arrayOfTopics[index]}`))[i][taskNameArray[i]];
				taskListArray = [...taskListArray, additionList];
				}
		this.setState({
			taskNameList: taskNameArray,
			itemsList: taskListArray,
			topic: arrayOfTopics[index],
			index: index,
		});
		}
		
	}
	onSubmitRender = (topic)=>{
		
		let array = Object.keys(window.localStorage)
		let length = JSON.parse(window.localStorage.getItem(`${topic}`)).length
		let taskNameArray = [];
		let taskListArray = [];
		for(let i=0;i<length;i++){
			let additionName = Object.keys(JSON.parse(window.localStorage.getItem(`${topic}`))[i])[0];
			taskNameArray = [...taskNameArray, additionName];	
			let additionList = JSON.parse(window.localStorage.getItem(`${topic}`))[i][taskNameArray[i]];
			taskListArray = [...taskListArray, additionList];
		}
		this.setState({
			taskNameList: taskNameArray,
			itemsList: taskListArray,
		});
		}
		
		clearTopic = (props) =>{
			window.localStorage.setItem(`${props.topic}`, JSON.stringify([]));
		}
	componentDidMount(props){


		let array = Object.keys(window.localStorage)
		let length = JSON.parse(window.localStorage.getItem(`${array[this.props.topicIndex]}`)).length
		let taskNameArray = [];
		let taskListArray = [];
		for(let i=0;i<length;i++){
			let additionName = Object.keys(JSON.parse(window.localStorage.getItem(`${array[this.props.topicIndex]}`))[i])[0];
			taskNameArray = [...taskNameArray, additionName];	
			let additionList = JSON.parse(window.localStorage.getItem(`${array[this.props.topicIndex]}`))[i][taskNameArray[i]];
			taskListArray = [...taskListArray, additionList];
		}
			this.setState({
				index: this.props.topicIndex,
				topic: array[this.state.index],
				taskNameList: taskNameArray,
				itemsList: taskListArray,

			})
			
	}
	 
	render(){
		let arrayOfTopics = Object.keys(window.localStorage);
		
		return(
			<div className = 'Topics'>
			
				<TopicHeader changeTopic = {this.changeTopic} topic = {arrayOfTopics[this.state.index]} onSubmitRender = {this.onSubmitRender} changeAppView = {this.props.changeAppView} clearTopic = {this.clearTopic} />
				<TopicBody   topic = {arrayOfTopics[this.state.index]} taskNames = {this.state.taskNameList} itemLists = {this.state.itemsList} onSubmitRender = {this.onSubmitRender} />
				
			</div>
		)
		}
}

export default Topics
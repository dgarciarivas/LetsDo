import React from 'react';


class Counter extends React.Component{
	constructor(props){
		super();
		this.state={
				dif: 0,
				string: "loading",
				start: undefined, //this is when the count first started
				timeElapsed: 0, //this is the time elapsed before the counter was stopped
				end: undefined, //this is when the counter was stopped
				buttonText: 'start', 
				store: Number(props.time), //previous store time,
				stopped: true, // boolean that indicates state of the counter
				totalCount: Number(props.time), //total count of the counter
				isClicked: false, //this will keep track if the total time or clocking time is displayed: default is total
			}
		this.onClick = this.onClick.bind(this);
		this.handleOnClick = this.handleOnClick.bind(this);
		this.onClickR = this.onClickR.bind(this);
		this.clickClocking = this.clickClocking.bind(this);


		}

		
	clickClocking(){
		let stringC1;
		let stringC2;
    	let count =  this.state.totalCount
    	let clocking =  this.state.dif
    	
    	if(count/1000 < 60){
    		stringC1 = `${Math.floor(count/1000)} s`;
    		stringC2 = `${Math.floor(clocking/1000)} s`;
    	}
    	else if( count/60000< 60){
    		stringC1 = `${Math.floor(count/60000)} min`;
    		stringC2 = `${Math.floor(clocking/60000)} min`;
    	}
    	else if (count/3600000 < 24){
    		stringC1 = `${Math.floor(count/3600000)} h`;
    		stringC2 = `${Math.floor(clocking/3600000)} h`;
    	}else{
    		stringC1 = `${Math.floor(count/(3600000*24))} d`;
    		stringC2 = `${Math.floor(count/(3600000*24))} d`;

    	} 
		let isCounting
		let string
		if(this.state.isClicked){		
				isCounting = false;
				string = "Clocking: "+stringC2	
				this.setState({
					isClicked: false,
					string: string,

				});	
					
		}else if(this.state.isClicked === false){
				isCounting = true;
				string = "Count: "+stringC1
				this.setState({
					isClicked: true,
					string: string,
				});
				
		}
				console.log(string)
	}
	onClick(){
		let isOn;
		const current = new Date();
		if(this.state.stopped){		
				this.setState({start: current,
						buttonText: 'stop',
						stopped: false,
						});			
				isOn = true;
		}else if(this.state.stopped === false){
			
				this.setState({
					end: current,
					buttonText: 'start',
					stopped: true,
				});
				isOn = false;
		}
		this.handleOnClick(isOn);
	}
		handleOnClick(isOn){
		if(isOn){
			this.count = setInterval(()=>{
				let dif  = new Date() - this.state.start;
				this.setState({
					dif: dif,
					totalCount: dif + this.state.store,
				})
				console.log(dif);
			}, 10);
		}else{
			console.log('stopped', this.state.totalCount);
			this.setState({store: this.state.totalCount});
			let want = JSON.parse(window.localStorage.getItem(this.props.topic))[this.props.taskIndex][this.props.task][this.props.itemIndex]

			want.time = this.state.totalCount;
			console.log(want)
			let copyItems  = JSON.parse(window.localStorage.getItem(this.props.topic))[this.props.taskIndex][this.props.task];
			copyItems.splice(this.props.itemIndex, 1, want)
			console.log(copyItems);
			let replaceItems  = JSON.parse(window.localStorage.getItem(this.props.topic))[this.props.taskIndex];
			console.log(replaceItems)
			replaceItems[this.props.task] = copyItems
			console.log(replaceItems)
			let replaceTask  = JSON.parse(window.localStorage.getItem(this.props.topic));
			replaceTask[this.props.taskIndex] = replaceItems 
			console.log(replaceTask);
			let replaceTopic = JSON.stringify(replaceTask);
			window.localStorage.setItem(this.props.topic, replaceTopic);

			console.log('you stored the time, your new time is', JSON.parse(window.localStorage.getItem(this.props.topic))[this.props.taskIndex][this.props.task][this.props.itemIndex].time)
		
			clearInterval(this.count);
			
			
		}
	}
			
onClickR(){
	
	this.setState({totalCount: 0,
				buttonText: 'start',
				stopped: true,
				timeElapsed: 0,
				store: 0,
			})
	clearInterval(this.count);
}
  	

	render(){

		
 		return(
			<div id = 'Counter' 
					style={{
						
						display: 'flex',
						flexDirection: "column",
						color: 'black',


					}}> 
					<div onClick = {this.clickClocking} >
						{`${this.state.string + this.state.totalCount}`}
					</div>
					<div id = 'counterButtonContainer'
					style = {{
						display: 'flex',
						justifyContent: 'space-evenly',
						flexDirection: 'row',
					}}>
					<button style = {{height: '15px',
										width: '30px,'}} onClick={this.onClick}> {this.state.buttonText} </button>
					<button id = 'clearCounter' style = {{height: '15px',
										width: '30px,'}}
						  onClick = {this.onClickR}
						 >clear</button>
					</div>
			</div>


		);
	}

	}


export default Counter;
import React from 'react'

class Life extends React.Component{
	constructor(props){
		super();
		this.state = {
			Life: props.Life
		}
	}
		componentDidMount(props){
		//update life times
		 this.tictoc = setInterval(
                    function(){
                    	//get info on the current time
                    	const now = new Date();
                    	
                    	
                    	//get the 
                    	const old = new Date(this.props.started)                    	
                    	this.setState({
                    		Life: now-old
                    	})
                    	
      			}.bind(this), 1000);
		}
  componentWillUnmount(){
    clearInterval(this.tictoc);
  }
  render(){
  		let string;
    	let dif = this.state.Life
      var thresh = 5*3600000*24;  
      if (dif < thresh){
            var color = 'green';
      }else{
              var color = 'red';
      }
    	if(dif/1000 < 60){
    		string = `${Math.floor(dif/1000)} second(s)`;
    	}
    	else if( dif/60000< 60){
    		string = `${Math.floor(dif/60000)} minute(s)`;
    	}
    	else if (dif/3600000 < 24){
    		string = `${Math.floor(dif/3600000)} hour(s)`;
    	}else if(isNaN(dif)){
        string = 'loading'
      }
      else{
    		string = `${Math.floor(dif/(3600000*24))} day(s)`;
    	}
  	return(
  		<div
           style = {{color: `${color}`}}>
  			Life: {`${string}`}
  		</div>
  		)
  		}
	}

export default Life
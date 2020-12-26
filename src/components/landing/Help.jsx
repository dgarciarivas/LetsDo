import React from "react";

const Help = () =>{
	return(
			<div id = "help" style = {{ opacity: 0, position: 'absolute',}}>
					
					<p> 1. topics should be one word (high level... school, basketball, job) </p>
					<p> 2. tasks should be actions related to the topic </p>
					<p> 3. items should be action items which need to be completed in order to complete the task </p>

			</div>
		)
}

export default Help;
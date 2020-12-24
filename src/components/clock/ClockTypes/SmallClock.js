import React from 'react';


const SmallClock = (props)=>{

 return(
     
          <div className="hours-indicator clock" id='hour' 
                style={{
                  
                  border: '1px none #333',
                  height: '75px',
                  width: '75px',
                  backgroundColor: 'white',
                }}>
            <div className="min-indicator clock" id="minutes"
                   style={{
                      
                      border: '1px none #333',
                      height: '50px',
                      width: '50px',
                      backgroundColor: 'white',
                    }}>
              <div className="sec-indicator clock" id ="seconds"
              onClick={ ()=> {
                                          let del = confirm("Are you sure you want to clear all?"); 
                                          if (del == true){var twice = confirm("Are you REALLY sure you want to clear all?"); 
                                                            if(del === true && twice === true){
                                                                                                window.localStorage.clear(); 
                                                                                                location.reload();
                                                                                                console.log('storage cleared')
                                                                                                }
                                                          }
                                      }}
                       style={{
                          
                          border: '1px none #333',
                          height: '25px',
                          width: '25px',
                          backgroundColor: 'white',
                        }}>
              
              </div>
            </div>

            
          </div>
      
      )		


}

export default SmallClock;

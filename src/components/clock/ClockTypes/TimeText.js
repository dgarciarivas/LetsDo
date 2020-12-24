import React from 'react';

const TimeText = (props) =>{

  return(
      <div className = 'time-text clock' 
         
            onClick={ ()=> {
                            let del = confirm("Are you sure you want to clear all?"); 
                            if (del == true){var twice = confirm("Are you REALLY sure you want to clear all?"); 
                            if(del === true && twice === true){
                                          window.localStorage.clear(); 
                                          location.reload();
                                          console.log('storage cleared')
                                            }
                                       }
                                }}>


                 <div className = 'clock-text' 
                    id="weekday" 
                   >
                                {`${props.weekday}`}
                  </div>
                  <div className = 'clock-text' 
                      id='date' 
                     >   
                          {`${props.month} / ${props.day} / ${props.year}`}
                  </div>
                  <div className='clock-text'> 
                      {`${props.hour} : ${props.min} : ${props.sec}`} 
                  </div> 

                        
                 
                </div>


)

}

export default TimeText;
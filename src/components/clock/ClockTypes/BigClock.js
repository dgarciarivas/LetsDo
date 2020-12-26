import React from 'react';
import TimeText from './TimeText';


const BigClock = (props)=>{

 return(
     
          <div className="hours-indicator clock" id='hour' 
                style={{
                  
                  border: '1px none #333',
                  height: '120px',
                  width: '120px',
                  backgroundColor: 'white',
                }}>
            <div className="min-indicator clock" id="minutes"
                   style={{
                      
                      border: '1px none #333',
                      height: '110px',
                      width: '110px',
                      backgroundColor: 'white',
                    }}>
              <div className="sec-indicator clock" id ="seconds"
                       style={{
                          
                          border: '1px none #333',
                          height: '100px',
                          width: '100px',
                          backgroundColor: 'white',
                        }}>
                      <TimeText day = {props.day} 
                                weekday = {props.weekday} 
                                hour = {props.hour} 
                                year = {props.year} 
                                month = {props.month}
                                hour = {props.hour}
                                min = {props.min}
                                sec = {props.sec}
                                changeClockView = {props.changeClockView}
                                />
              </div>
            </div>

            
          </div>
      
      )		


}

export default BigClock;

import React from 'react';
import BigClock from './ClockTypes/BigClock';
import SmallClock from './ClockTypes/SmallClock';

 const ClockDisplay = (props)=>{
    

      switch(props.clockView){

        case 1: 
        return(

            <BigClock day = {props.day} 
                                weekday = {props.weekday} 
                                hour = {props.hour} 
                                year = {props.year} 
                                month = {props.month}
                                hour = {props.hour}
                                min = {props.min}
                                sec = {props.sec}
                                changeClockView = {props.changeClockView}/>

          );
        break;

        case 2: 
        return(
              <SmallClock changeClockView = {props.changeClockView}/>

          );
        break;
      }

   
  }

  export default ClockDisplay
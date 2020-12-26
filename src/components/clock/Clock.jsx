import React from 'react';
import ClockDisplay from "./ClockDisplay";



class Clock extends React.Component{
  constructor(){
    super();
    this.state = {
      currentYear: '',
      currentDay: '',
      currentMonth: '',
      currentHour: {
              hour: '',
              percent: 0,
              deg: 0,
      },
      dayOfWeek: '',
      currentMin: {
              min: '',
              percent: 0,
              deg: 0,
      },
      currentSec: {
              sec: '',
              percent: 0,
              deg: 0,
            },
      clockView: 1,
          }
        this.changeClockView = this.changeClockView.bind(this);
             }
  componentDidMount(){
       this.tictoc = setInterval(
                    function(){
                             const now = new Date();
                             var dw = now.getDay();
                             switch(dw){
                                case 0:
                                  dw = "Sunday";
                                  break;
                                case 1:
                                  dw = "Monday";
                                  break; 
                                case 2:
                                  dw = "Tuesday";
                                  break;
                                case 3:
                                  dw = "Wednesday";
                                  break;
                                case 4:
                                  dw = "Thursday";
                                  break;
                                case 5:
                                  dw = "Friday";
                                  break;
                                case 6:
                                dw = "Saturday";
                                break;
                                }
                            const day = now.getDate();
                            const month = now.getMonth()+1;
                            const year = now.getFullYear();
                            var hour = now.getHours();
                            if (hour>12){
                              var twelveHour = hour-12;
                                        } 
                            else{ 
                                  twelveHour = hour
                                }
                            var hdeg = 360*(hour/24);
                            const min = now.getMinutes();
                            var mdeg = 360*(min/60);
                            const sec = now.getSeconds();
                            var sdeg = 360*(sec/60);
                            this.setState({
                                            currentYear: year,
                                            currentDay: day,
                                            currentMonth: month,
                                            currentHour: {hour: twelveHour,
                                                          percent: hour/24,
                                                          deg: hdeg},
                                            currentMin: {min: min,
                                                        percent: min/60,
                                                        deg: mdeg},
                                            currentSec: {
                                                          sec: sec,
                                                          percent: sec/60,
                                                          deg: sdeg},
                                            dayOfWeek: dw,
                                          });
                            if (this.state.currentSec.deg >180){
                                  document.getElementById("seconds").classList.add("o180");
                                  document.getElementById("seconds").classList.remove("u180");
                                  document.documentElement.style.setProperty('--deg-sec', `${this.state.currentSec.deg-90}deg` );
                                }
                            else{
                                    document.getElementById("seconds").classList.add("u180");
                                    document.getElementById("seconds").classList.remove("o180");
                                    document.documentElement.style.setProperty('--deg-sec', `${this.state.currentSec.deg+90}deg` );    
                                  }
                            var minutes = document.getElementById('minutes');
                            if(this.state.currentMin.deg > 180){
                                 minutes.classList.add("o180");
                                  minutes.classList.remove("u180");
                                document.documentElement.style.setProperty('--deg-min', `${this.state.currentMin.deg-90}deg` );
                                }
                            else{
                                minutes.classList.add("u180");
                                minutes.classList.remove("o180");
                                document.documentElement.style.setProperty('--deg-min', `${this.state.currentMin.deg+90}deg` );    
                                }
                            var hour = document.getElementById('hour');
                             if (this.state.currentHour.deg >180){
                                 hour.classList.add("o180");
                                  hour.classList.remove("u180");
                                  document.documentElement.style.setProperty('--deg-hour', `${this.state.currentHour.deg-90}deg` );
                              }
                              else{
                                  hour.classList.add("u180");
                                  hour.classList.remove("o180");
                                  document.documentElement.style.setProperty('--deg-hour', `${this.state.currentHour.deg+90}deg` );    
                                }
                          }.bind(this), 1000);
       
     }
     componentWillUnmount() {
    clearInterval(this.tictoc);
  }
    changeClockView(num){ 
             let view = this.state.clockView;
              if (num === 1){
                view++;
                       }
              else{
                view--;
                  }
              let remainder = view%2;
              view = remainder;
              if (remainder === 0){
                view = 2;
              }
              this.setState({
                clockView: view,
                });
      }
  render(){
      return(
             <div className="Clock" id = "ClockComponent"
                   style = {{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <ClockDisplay clockView = {this.state.clockView} day={this.state.currentDay} month={this.state.currentMonth} year={this.state.currentYear} 
                    hour={this.state.currentHour.hour} hourPercent={this.state.currentHour.percent} sec={this.state.currentSec.sec} 
                    secPercent={this.state.currentSec.percent} min={this.state.currentMin.min} minPercent = {this.state.currentMin.percent}
                    weekday = {this.state.dayOfWeek} changeClockView = {this.changeClockView}
                />
               </div>       
                    );

            }
          }

export default Clock
  
import React from 'react';
import ReactDOM from 'react-dom';
import AppContent from './components/AppContent';

const width = window.screen.width;
const height = window.screen.height;
const rootEl = document.getElementById('root');
// let height = window.screen.height;
// let width = window.screen.width;
// rootEl.style.width = width+'px';
// rootEl.style.height = height+'px';
// rootEl.style.overflow = 'hidden';
    class App extends React.Component{
        constructor(){
          super();
          this.state = {
            view: 1,
            topicIndex: 0,
          }
          this.changeAppView = this.changeAppView.bind(this);
        }
        changeAppView(num, topicIndex, clockOff){
            //console.log('changed the view topics page ', num);
            //console.log('index of the target topic is ', topicIndex);
             this.setState({
                 view: num,
                 topicIndex: topicIndex,
           });
            
         
            
        }
        componentDidMount(){
          const width = window.screen.width;
const height = window.screen.height;
        }
        render(){
          
           return(
                 <div id="App">  
                   <AppContent view = {this.state.view} changeAppView = {this.changeAppView} topicIndex = {this.state.topicIndex}/>
                  </div>
                )
               
            }
}  

    ReactDOM.render(
        <App />, rootEl
    );




// This checks for local changes and automatically refreshes the browser (hot-reloading)
if (module.hot) {
    module.hot.accept('./components/App.jsx', () => renderApp());
}
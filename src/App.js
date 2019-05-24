import React ,{Component}from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import Que from './questions';
class  App extends Component {
  render(){
    return (
      <div className="App" id="maincontainer">
        <h1>QUIZ GAME</h1>
        <h1>WHICH LEVEL OF DIFFICULTY DO YOU WANT TO CHOOSE?</h1>
        <p><button id='b1' onClick={()=>question("e")}>EASY</button></p>
        <p><button id='b2' onClick={()=>question("m")}>MEDIUM</button></p>
        <p><button id='b3' onClick={()=>question("h")}>HARD</button></p>
      </div>
    );
  }
  }
function question(d)
{
  
  ReactDOM.render(<Que difficulty={d} />, document.getElementById('root'));
}

export default App;

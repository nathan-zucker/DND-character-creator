import React, {Component} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Header'>
        <Navbar />
      </header>
      <body>
        <h1 className="Title">Hey, this is Nathan!</h1>
        <MainContent />
        <Button />
      </body>
    </div>
  );
}

function Navbar() {
  return (
    <div>
      <h1>I am empty</h1>
    </div>
  );
}

function MainContent() {
  const itemOne = 'hello!';
  const itemTwo = 'hi!';
  const itemThree = 'goodbye!';
  return (
    <div className="Main">
      <p className='Description'>Here's a whole bunch of content for ya.</p>
      <ul className='List'>
        <li className='ListItem'>{itemOne}</li>
        <li className='ListItem'>{itemTwo}</li>
        <li className='ListItem'>{itemThree}</li>
      </ul>
    </div>
  );
}

class Button extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: 'Nathan',
      age: 23,
      location: 'West Virginia',
      hobby: 'guitar'
    }
  }
  render() {
    return(
      <div>
        <button className='button'>Click Me!</button>
      </div>
    );
  }
}


export default App;

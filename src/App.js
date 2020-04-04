import React from 'react';
import logo from './logo.svg';
import './App.css';

class Child extends React.Component {

  constructor(props) {
    super(props);
    this.ColorChanged = this.ColorChanged.bind(this);
  }

  ColorChanged = (event) => {
      {this.props.colorChange(event.target.value)};
  }

   render() {
     return(
       <label>
         Pick your favorite Color:
         <select onChange={this.ColorChanged}>
           <option value="red">Red</option>
           <option value="green">Green</option>
           <option value="black">Black</option>
           <option value="blue">Blue</option>
         </select>
       </label>
     );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      age: null,
      errormessage: '',
      resultmessage: '',
      color: 'red'
    };
    this.colorChange = this.colorChange.bind(this);
  }

  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = '';

    if (nam === "age") {
      if (val !="" && !Number(val)) {
        err = <strong>Your age must be a number</strong>;
      }
    }

    this.setState({errormessage: err});
    this.setState({[nam]: val});
    this.setState({resultmessage: ''});
  }

  mySubmitHandler = (event) => {
    event.preventDefault();
    let res = '';
    res = <strong>{this.state.username} is of age {this.state.age} </strong>;
    this.setState({resultmessage: res});
    this.setState({errormessage: ''});
  }

  colorChange = (newColor) => {
    this.setState({color: newColor});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
      <form onSubmit={this.mySubmitHandler}>
      <Child colorChange={this.colorChange}/>
      <h2 style={{ color: this.state.color }}>Hello {this.state.username} {this.state.age}</h2>
      <label>Name:</label>
      <input
        type='text'
        name='username' 
        onChange={this.myChangeHandler}
      />
      <br/><br/>
      <label>Age:</label>
      <input
        type='text'
        name='age'
        onChange={this.myChangeHandler}
      />
      <br/><br/>

      <input className="button" type='submit' value='Submit'/> <br/><br/>
      <h1 className='errorClass'> {this.state.errormessage} </h1>
      <h1> {this.state.resultmessage} </h1>

      </form>
      </div>
      </div>
    );
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;

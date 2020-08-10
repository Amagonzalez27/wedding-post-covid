import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>Love is Patient!</h1>
        <h2>Amanda & Miguel Tie the Knot July 15th, 2021</h2>
      </div>
      <div className="App-message">
        <p>
          As we redesign our site and re-plan for an even better party, please
          save our new date at Sky View in Estes Park, CO!
        </p>
        <p>We can't say WE DO without all of you!!!</p>
        <p>
          Check back soon for new updates and we hope you are able to join us
          soon!!
        </p>
        <div className="App-message-end">
          <p>With Love,</p>
          <span>Amanda & Miguel</span>
        </div>
        <img alt="mask" className="App-mask" src="/mask.jpg" />
      </div>
    </div>
  );
}

export default App;

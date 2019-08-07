import React from 'react';
import logo from './logo.svg';


interface appProps{
  name: string;
}
const App: React.FC<appProps> = (props) => {
  return (
    <div className="App col-md-10">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {props.name}
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import './App.css';
import ToDoContainer from './containers/ToDoContainer'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What's Next?
          <ToDoContainer/>
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
      {/* <AmplifySignOut /> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import First from './components/first/first';
import Second from './components/second/second';
import Third from './components/third/third';
import ButtonEx from './components/buttonEx/buttonEx';
import Four from './components/four/four';
import Five from './components/five/five';
import Six from './components/six/six';
import Seven from './components/seven/seven';

function App() {

  return (
    <div className="App">
      <p>Welcome to React Programming...Hexaware</p>
      <p>
        <First />
      </p>
      <p>
        <Second />
      </p>
      <p>
        <Third firstName="Prasanna" lastName="Pappu" company="Hexaware" />
      </p>
      <p>
        <ButtonEx />
      </p>
      <p>
        <Four />
      </p>
      <p>
        <Five />
      </p>
      <p>
        <Six />
      </p>
      <p>
        <Seven />
      </p>
    </div>
  );
}

export default App;

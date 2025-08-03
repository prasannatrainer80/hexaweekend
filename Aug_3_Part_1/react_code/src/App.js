import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
      <Login /> <br/>
      <Protected />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import BasicTable from './components/BasicTable';
import UserShow from './components/UserShow';
import FilterShow from './components/FilterShow';
import SortExample from './components/SortExample';

function App() {
  return (
    <div className="App">
      <BasicTable /> <hr/>
      <UserShow /> <hr/>
      <FilterShow /> <hr/>
      <SortExample />
    </div>
  );
}

export default App;

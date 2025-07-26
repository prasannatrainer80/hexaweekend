import logo from './logo.svg';
import './App.css';
import EmployShow from './components/employShow/employShow';
import EmploySearch from './components/employSearch/employSearch';
import EmployAdd from './components/employAdd/employAdd';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path="/employShow" element={<EmployShow />} /> 
          <Route path="/employSearch" element={<EmploySearch />} />
          <Route path="/addEmploy" element={<EmployAdd />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import UserShow from './components/usershow/usershow';
import UserSearch from './components/usersearch/usersearch';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/menu/menu';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<Menu />} />
          <Route path="/userShow" element={<UserShow />} /> 
          <Route path="/userSearch" element={<UserSearch />} />
        </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;

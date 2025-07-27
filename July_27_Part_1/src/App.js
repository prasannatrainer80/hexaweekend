import logo from './logo.svg';
import './App.css';
import ContextEx1 from './components/contextEx1/contextEx1';
import ContextEx2 from './components/contextEx2/contextEx2';
import ColorTheme from './components/colortheme/colortheme';
import FontTheme from './components/fontTheme/fontTheme';
import MemoExample1 from './components/memoExample1/memoExample1';
import MemoExample2 from './components/memoExample2/memoExample2';
import MemoExample3 from './components/memoExample3/memoExample3';
import RefEx1 from './components/refEx1/refEx1';
import RefEx2 from './components/refEx2/refEx2';

function App() {
  return (
    <div className="App">
      <ContextEx1 /> <hr/>
      <ContextEx2 /> <hr/>
      <ColorTheme /> <hr/>
      <FontTheme /> <hr/>
      <MemoExample1 /> <hr/>
      <MemoExample2 /> <hr/>
      <MemoExample3 /> <hr/>
      <RefEx1 /> <hr/>
      <RefEx2 />
    </div>
  );
}

export default App;

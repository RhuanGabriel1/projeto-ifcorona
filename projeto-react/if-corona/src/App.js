import './App.css';
import MainContent from './components/MainContent';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <input type="checkbox" id="nav"/>
      <SideBar/>
      <MainContent/>
    </div>
  );
}

export default App;

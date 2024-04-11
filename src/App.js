import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/App.scss'
import Navbar from './components/Navbar';
import Regulation from './components/Regulation';
import Reg2014 from './components/Reg2014';
function App() {
  return (
    <div className="App">
     <Navbar/>  
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Regulation/>}/>
        <Route path="/Reg2014" element={<Reg2014/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

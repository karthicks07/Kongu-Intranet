import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './styles/App.scss'
import Navbar from './components/Navbar';
import Regulation from './components/Regulation';
import Reg2014 from './components/Reg2014';
import Reg2018 from './components/Reg2018';
import Reg2020 from './components/Reg2020';
import Reg2022 from './components/Reg2022';
function App() {
  return (
    <div className="App">
     <Navbar/>  
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<Regulation/>}/>
        <Route path="/Reg2014" element={<Reg2014/>}/>
        <Route path="/Reg2018" element={<Reg2018/>}/>
        <Route path="/Reg2020" element={<Reg2020/>}/>
        <Route path="/Reg2022" element={<Reg2022/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

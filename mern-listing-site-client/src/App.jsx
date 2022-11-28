import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import AllPractitioners from './pages/allpractitioners/AllPractitioners';
import BodyPractitioners from './pages/allpractitioners/BodyPractitioners';
import MindPractitioners from './pages/allpractitioners/MindPractitioners';
import SpiritPractitioners from './pages/allpractitioners/SpiritPractitioners';
import Home from './pages/home/Home';
import Practitioner from './pages/practitioner/Practitioner';
import Practitioners from './pages/practitioners/Practitioners';
function App() {

  return (
    <div className="App">
      
   <Router>
    <Routes>

    <Route path="/" element={<Home />} /> 
    <Route path="/practitioners" element={<Practitioners />} />
    <Route path="/allpractitioners" element={<AllPractitioners />} /> 
    <Route path="/mind" element={<MindPractitioners />} /> 
    <Route path="/body" element={<BodyPractitioners />} /> 
    <Route path="/spirit" element={<SpiritPractitioners />} /> 

    <Route path="/practitioners/find/:id" element={<Practitioner />} /> 
    </Routes>
   </Router>
    </div>
  );
}

export default App;

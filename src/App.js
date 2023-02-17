// import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurTeam from './pages/ourTeam/OurTeam';
import Publications from './pages/publications/Publications';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route exact path="/about" element={ <About /> }></Route>
        <Route exact path="/our-team" element={ <OurTeam /> }></Route>
        <Route exact path="/publications" element={ <Publications /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;

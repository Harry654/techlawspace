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
        <Route exact path="/" key={1} element={ <Home /> }></Route>
        <Route exact path="/about" key={2} element={ <About /> }></Route>
        <Route exact path="/our-team" key={3} element={ <OurTeam /> }></Route>
        <Route exact path="/publications" key={4} element={ <Publications /> }></Route>
      </Routes>
    </Router>
  );
}

export default App;

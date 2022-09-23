// import './App.css';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route exact path="/about" element={ <About /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

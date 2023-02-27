// import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import OurTeam from './pages/ourTeam/OurTeam';
import Publications from './pages/publications/Publications';
import Article from './pages/article/Article';
import AdminLogin from './pages/adminLogin/AdminLogin';
import Dashboard from './pages/dashboard/Dashboard';
import UploadArticle from './pages/UploadArticle/UploadArticle';
import UploadMember from './pages/UploadMember/UploadMember';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Home /> }></Route>
        <Route exact path="/about" element={ <About /> }></Route>
        <Route exact path="/our-team" element={ <OurTeam /> }></Route>
        <Route exact path="/publications" element={ <Publications /> }></Route>
        <Route exact path="/articles/:slug" element={ <Article /> }></Route>
        <Route exact path="/admin/login" element={ <AdminLogin /> }></Route>
        <Route exact path="/admin" element={ <Dashboard /> }></Route>
        <Route exact path="/admin/upload/article" element={ <UploadArticle /> }></Route>
        <Route exact path="/admin/add/member" element={ <UploadMember /> }></Route>
        <Route exact path="*" element={ <h1>Page not found</h1> }></Route>
      </Routes>
    </Router>
  );
}

export default App;

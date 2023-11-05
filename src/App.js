import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Products from './pages/Products';
// import Contact from './pages/Contact';
// import NavBar from './components/Navbar';
import AuthRoutes from './routes/AuthRoutes';
import UnAuthRoutes from './routes/UnAuthRoutes';
// import PostLists from './components/PostList';
// import Posts from './pages/Posts';
// import Post from './pages/Post';

function App() {

  return (
    <>
      <Router>
        {/* <NavBar /> */}
        <Routes>
          {AuthRoutes}
          {UnAuthRoutes}
        </Routes>
      </Router>
    </>
  );
}

export default App;

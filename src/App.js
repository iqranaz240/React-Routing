import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';
import NavBar from './components/Navbar';
import PostLists from './components/PostList';
import Posts from './pages/Posts';
import Post from './pages/Post';

function App() {

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/posts" element={<Posts />}>
            <Route path=":slug" element={<Post />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

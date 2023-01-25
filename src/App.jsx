import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Contact from './pages/Contact/Contact';
import Profile from './pages/Profile/Profile';
import Blog from './pages/Blog/Blog';
import Write from './pages/Write/Write';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="profile" element={<Profile />} />
      <Route path="write" element={<Write />} />
    </Routes>
  );
}

export default App;

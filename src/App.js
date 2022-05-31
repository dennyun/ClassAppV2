import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GuestRoute from './routes/GuestRoute'

import Auth from './components/Auth';
import Login from './pages/Login'
import Home from './pages/Home';
import NewPost from './pages/Post/New';
import Register from './pages/Register';

import './mock';
import { Quiz } from './pages/Quiz';

function App() {

  return (
      <BrowserRouter>
        <Auth>
          <Routes>
            <Route path="/post" element={<NewPost />} />
            <GuestRoute path="/Register" element={<Register />} />
            <GuestRoute path="/login" element={<Login />} />
            <Route path="//*" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
          </Routes>
        </Auth>
      </BrowserRouter>
  );
}

export default App;

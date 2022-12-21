import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import TodoList from './components/TodoList/TodoList';
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <Routes>
        <Route path="/" element={<TodoList/>} />
        <Route path="/History" element={<ImageUpload/>} />
        <Route path="/Create" element={<h1>Create</h1>} />
        <Route path="/Settings" element={<h1>Settings</h1>} />
        <Route path="/Login" element={<h1>Login</h1>} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ClientDetails from './pages/ClientDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/client/:id" element={ <ClientDetails /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/" element={ <Navigate to="/login" /> } />
      </Routes>
    </>
  );
}

export default App;

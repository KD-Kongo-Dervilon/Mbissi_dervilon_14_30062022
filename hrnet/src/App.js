import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import EmployeeList from './pages/Employes/EmployeeList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path="/employee-list" element={<EmployeeList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


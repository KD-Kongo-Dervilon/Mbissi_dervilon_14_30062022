import React from 'react';
import './sass/main.scss';
import { EmployeesProvider} from './Utils/Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateEmployee from './pages/CreateEmployee/index';
import EmployeesList from './pages/EmployeesList/index';

const App = () => {
  return (
    <BrowserRouter>
    <EmployeesProvider>
      <Routes>
        <Route path={"/"} element={<CreateEmployee/>} />
        <Route path={"/employees-list"} element={<EmployeesList/>} />
      </Routes>
    </EmployeesProvider>
    </BrowserRouter>
  )
}

export default App


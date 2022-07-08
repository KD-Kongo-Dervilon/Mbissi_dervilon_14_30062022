import React from 'react';
import { NavLink } from 'react-router-dom';
import Form from '../../components/Form/Form';
import '../../styles/App.css';

const Home = () => {

    return (
        <>
            <header className="title">
                <h1>HRnet</h1>
            </header>
            <div className="container">
                <NavLink to={'./employee-list'}>View Current Employees</NavLink>
                <h2>Create Employee</h2>
                <Form/>
            </div>
        </>
    )
}

export default Home
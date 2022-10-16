import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from '../Components/Pages/Home/index'
import About from '../Components/Pages/About/index'
import Skills from '../Components/Pages/Skills/index'
import Project from '../Components/Pages/Projects/index'
import Contact from '../Components/Pages/Contacts/index'

export default function Rotas() {
    return(
        <Router>
            <Routes>
            <Route path="/"  element={<Home />}/>
            <Route path="/about"  element={<About />}/>
            <Route path="/skills"  element={<Skills />}/>
            <Route path="/projects"  element={<Project />}/>
            <Route path="/contact"  element={<Contact />}/>
            </Routes>
        </Router>
    )
}
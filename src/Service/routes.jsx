import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './../Components/Pages/Home/index'
import About from '../Components/Pages/About/index'
import Skills from '../Components/Pages/Skills/index'
import Projects from '../Components/Pages/Projects/index'
import Contact from '../Components/Pages/Contacts/index'

export default function RoutesApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

        </Router>
    )

}
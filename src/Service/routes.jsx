import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './../Components/Pages/Home/index'

export default function RoutesApp(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>

        </Router>
    )

}
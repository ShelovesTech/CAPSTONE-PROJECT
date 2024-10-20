import React from "react";
import { BrowserRouter as Router , Routes , Route,Link } from "react-router-dom";
import Home from './components/Home/home'
import About from './components/About/About'
import signup from "./components/signup";

import './App.css'


function App () {
    return (
      <>
        <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* <Route
                    path="/contact"
                    element={<Contact />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route
                    path="/sign-up"
                    element={<SignUp />} /> */}
            </Routes>
        </Router><div className="menu">
                <Home></Home>
                <About></About>
                <signup></signup>


            </div></>
    
    )  

}

export default App ; 


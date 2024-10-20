import React from "react";
// import Navbar from "./components/Navbar";



function About (){
    return (
        <>
        <div className="content">
        <div className="main">
            <div className="navbar">
                <div className="icon">
                    <h1 className="logo"> Books</h1>
                    <div className="menu">
                        <ul>
                        <li><a href="#">HOME</a></li>
                       <li><a href="#">ABOUT</a></li>
                       <li><a href="#">SERVICE</a></li>
                      <li><a href="#">PRODUCTS</a></li>
                      <li><a href="#">CONTACT</a></li>

                        </ul>
                    </div>
                    <div className="search">
                    <input class="srch" type="search" name="" placeholder="Type To text" />
                    <a href="#"><button class="btn">search</button></a>

                    </div>
                    <div className="content">
                    <h1>online library</h1>
                    <p> welcome the Claires Library .<br/>Incidunt necessitatibus nemo aliquid. Nostrum temporibus voluptatum, quae, id unde illum velit, <br/>cupiditate quos pariatur sunt eius nesciunt earum nobis </p>
                    </div>
                  
                    
                </div>
            </div>
        </div>
        </div>
    
        
        </>
        
    )



}


export default About ;
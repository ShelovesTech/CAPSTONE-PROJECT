import React from "react";

function cover () {

    return (
        <>
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
                    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, aut.<br>Incidunt necessitatibus nemo aliquid. Nostrum temporibus voluptatum, quae, id unde illum velit, <br></br>cupiditate quos pariatur sunt eius nesciunt earum nobis</br> </p>
                    </div>
                    <div className="form">
                    <h2>login Here</h2>
                <input type="email" name="email" placeholder="Enter Email Here"/>
                <input type="password" name="" placeholder="Enter Password Here"/>
                <button class="btnn"><a href="#"></a> log in</button>

                <p class="link"> Don't have an account<br/>
                <a href="#">Sign up here</a></p>
                <p class="liw"> log in with</p>

                    </div>
                    <div className="icon">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-skype"></ion-icon></a>

                    </div>
                </div>
            </div>
        </div>
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </>
    )


}
 export default cover ;    
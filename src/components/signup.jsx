import React from "react";
import { useState } from 'react'


function signup () {
    return (
        <div className="form">
        <h2>login Here</h2>
    <input type="email" name="email" placeholder="Enter Email Here"/>
    <input type="password" name="" placeholder="Enter Password Here"/>
    <button class="btnn"><a href="#"></a> log in</button>

    <p class="link"> Don't have an account<br/>
    <a href="#">Sign up here</a></p>
    <p class="liw"> log in with</p>

    <div className="icon">
                    <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                    <a href="#"><ion-icon name="logo-skype"></ion-icon></a>

                    </div>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>

        </div>
        
    )
}


export default signup ;
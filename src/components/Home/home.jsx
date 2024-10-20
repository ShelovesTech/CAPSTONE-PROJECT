import React from "react";
import { useState } from 'react'

// import Dowmload(1) from './public/images/'

function Home () {
    const [count, setCount] = useState(0)

    return (
    <>
       <div className="content ">
       <div className="search bar">
            <input class="srch" type="name" placeholder="Type to text"/>
            <a href="#"/><button className="btn">search</button>
            
       </div>
       <div className="History books">
        <h1>History books</h1>
        <img src="images/download (2).jpeg" width="150px" height="150px"  alt=" the history book"/>
            <img src="images/download (3).jpeg" width="150px" height="150px"  alt=" world history"/>
            <img src="images/download (4).jpeg" width="150px" height="150px"  alt=" Evolving world f3"/>
            <img src="images/images (7).jpeg" width="150px" height="150px"  alt=" the colosseum"/>
            <img src="images/images (8).jpeg" width="150px" height="150px"  alt=" black history"/>
            <img src="images/images (9).jpeg" width="150px" height="150px"  alt=" form 3 book"></img>
       </div>
       <div className="space">
        <h1> SPACE BOOKS</h1>
         <img src="images/images (11).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/images (12).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/images (13).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/images (14).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/images (15).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/download (6).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/download (7).jpeg" width="150px" height="150px"  alt=" space"/>
            <img src="images/download (8).jpeg" width="150px" height="150px"  alt=" space"></img>
       </div>
       <div className="story">
        <h3>Story Books</h3>
        <img src="images/images (17).jpeg" width="150px" height="150px"  alt=" story"/>
            <img src="images/images (16).jpeg" width="150px" height="150px"  alt=" story"/>
            <img src="images/download (12).jpeg" width="150px" height="150px"  alt=" STORY"/>
            <img src="images/When+Do+Hippos+Play+Cover+Thumbnail+Opt.jpeg" width="150px" height="150px"  alt=" story book"/>
            <img src="images/download (9).jpeg" width="150px" height="150px"  alt=" story book"/>
            <img src="images/download (11).jpeg" width="150px" height="150px"  alt=" story book"/>
            <img src="images/download (10).jpeg" width="150px" height="150px"  alt=" story book"/>
       </div>

       <div className="science">
          <h4>science books</h4>
              <img src="images/images.jpeg" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/images (1).jpeg" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/dbb0a00a128c24c56f42a93751611ffa.jpg" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/1eb9780d1a4470284e68fe0e6dba8851.webp" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/66ac03df9ed476563d562173-lab-manual-for-mader-biology-14th.jpg" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/818o6ggWEEL._AC_UF1000,1000_QL80_.jpg" width="150px" height="150px"  alt=" BIOLOGY"/>
            <img src="images/71-F9suLZ7L._SL1500_.jpg" width="150px" height="150px"  alt=" BIOLOGY"/>
       </div>


       

       </div>
       
    
               
    </>
)
}
export default Home;
    
     


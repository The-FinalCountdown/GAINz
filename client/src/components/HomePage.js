import React from "react";
import { Link } from 'react-router-dom';


function HomePage({ user }) {
  return (
    <div>
      <header>
        <h1 className="title">GAINZ</h1>
        <h1 className="title">Welcome {user}, WHAT ARE WE HITTING TODAY?!</h1>
      </header>
      <div className="go">
       
            <button class="btn"><Link to={"/push"}>Push</Link></button><br></br>
       
        <button className="btn"><Link to={"/pull"}>Pull</Link></button><br></br>
        <button className="btn"><Link to={"/legs"}>Legs</Link></button><br></br>
        <button className="btn"><Link to={"/arms"}>Arms</Link></button><br></br>
        <button className="btn"><Link to={"/fullbody"}>FullBody</Link></button><br></br>
        <button className="btn"><Link to={"/journal"}>Journal</Link></button>

        

      </div>
      
    </div>
  );
}

export default HomePage;
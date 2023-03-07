import React from "react";
import { Switch, Route, Link } from 'react-router-dom';


function HomePage({ user }) {
  return (
    <div>
      <header>
        <h1 class="title">GAINZ</h1>
        <h1 class="title">Welcome {user}, WHAT ARE WE HITTING TODAY?!</h1>
      </header>
      <div class="go">
        <Link to="/Push">
            <button class="btn">Push</button>
        </Link>
        <button class="btn">Pull</button>
        <button class="btn">Legs</button>
        <button class="btn">Arms</button>
      </div>
      <Switch>
        <Route path="/Push" />
        <Route/>
        <Route/>
        <Route/>

      </Switch>
    </div>
  );
}

export default HomePage;



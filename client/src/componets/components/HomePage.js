import React from "react";

function HomePage({ user }) {
  return (
    <div>
      <header>
        <h1 class="title">GAINZ</h1>
        <h1 class="title">Welcome {user}, WHAT ARE WE HITTING TODAY?!</h1>
      </header>
      <div class="go">
        <button class="btn">Push</button>
        <button class="btn">Pull</button>
        <button class="btn">Legs</button>
        <button class="btn">Arms</button>
      </div>
    </div>
  );
}

export default HomePage;



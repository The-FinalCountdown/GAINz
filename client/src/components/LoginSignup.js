import React, { useState } from 'react';

function LoginSignup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(event) {
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleLogin() {
  }

  function handleSignup() {
  }

  return (
    <div>
      <h1>Login or Signup</h1>
      <form>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <button type="button" onClick={handleLogin}>Login</button>
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
}
export default LoginSignup;

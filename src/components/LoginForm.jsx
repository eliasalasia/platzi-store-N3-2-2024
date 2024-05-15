import React from 'react';

function LoginForm() {
  const handleLogin = (e) => {
    e.preventDefault();
    alert("Login button clicked");
  };

  const handleForgotPassword = () => {
    alert("Forgot my password button clicked");
  };

  const handleSignUp = () => {
    alert("Sign up button clicked");
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

        <form onSubmit={handleLogin} className="form">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input type="text" id="email" placeholder="platzi@example.com" className="input input-email" />

          <label htmlFor="password" className="label">
            Password
          </label>
          <input type="password" id="password" placeholder="*********" className="input input-password" />

          <input type="submit" value="Log in" className="primary-button login-button" />
          <button type="button" onClick={handleForgotPassword}>Forgot my password</button>
        </form>

        <button className="secondary-button signup-button" onClick={handleSignUp}>Sign up</button>
      </div>
    </div>
  );
}

export default LoginForm;

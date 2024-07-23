import { useState } from 'react';

export function Login() {
  const [emailValue, setEmail] = useState('');
  const [passwordValue, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(emailValue);
    console.log(passwordValue);
  };

  return (
    <div className="login-page">
      <SignUp />
      <div className="form-container">
        <form onSubmit={handleSubmit} className="login-entry-fields">
          <input
            type="text"
            value={emailValue}
            onChange={handleEmailChange}
            className="login-email"
            placeholder="Email Address"
          />
          <input
            type="password"
            value={passwordValue}
            onChange={handlePasswordChange}
            className="login-password"
            placeholder="Password"
          />
          <button type="submit" className="login-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

function SignUp() {
  return <div className="login-text">Sign Up</div>;
}

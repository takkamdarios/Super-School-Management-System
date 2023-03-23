import React, { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';
import './styles.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [retypeEmail, setRetypeEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log('Username:', username, 'Email:', email, 'Retype Email:', retypeEmail, 'Password:', password, 'Retype Password:', retypePassword);
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register</h2>
      <InputField
        type="text"
        name="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="email"
        name="retypeEmail"
        placeholder="Retype Email"
        value={retypeEmail}
        onChange={(e) => setRetypeEmail(e.target.value)}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <InputField
        type="password"
        name="retypePassword"
        placeholder="Retype Password"
        value={retypePassword}
        onChange={(e) => setRetypePassword(e.target.value)}
      />
      <Button type="submit" className="register-btn">Register</Button>
    </form>
  );
};

export default RegisterForm;

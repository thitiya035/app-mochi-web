import React, { useState } from 'react';

export type loginParams = {
  email: string;
  password: string;
};

export function Login() {
  const [message, setMessage] = useState('');
  const [loginForm, setLoginForm] = useState<loginParams>({
    email: '',
    password: '',
  });

  const handleLogin = (e: any) => {
    e.preventDefault();

    if (loginForm.email && loginForm.password) {
      setMessage('เข้าสู่ระบบสำเร็จ!');
    } else {
      setMessage('กรุณากรอก Email และ Password!');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="App">
      <h2>เข้าสู่ระบบ</h2>

      <form onSubmit={handleLogin}>
        <div>
          <span> Email: </span>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <span> Password: </span>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit"> เข้าสู่ระบบ </button>
      </form>
      <p> {message} </p>
    </div>
  );
}

export default Login;

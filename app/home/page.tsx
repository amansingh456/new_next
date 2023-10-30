"use client";
import React, { MouseEventHandler, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<string | undefined>("");

 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
    console.log(inputValue)
  };
  const handleSubmit: MouseEventHandler<HTMLElement> = async (e) => {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ domain: email }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res);
  };
  return (
    <div >
      <label htmlFor="email">Email</label>
      <div >
        <div >
        
        <input
          type="text"
          id="input-group-1 email"
          name="email"
          value={email}
          placeholder="name@flowbite.com"
          onChange={handleInputChange}
        />
      </div>
      <button
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
    </div>
  );
};

export default Login;

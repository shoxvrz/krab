import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
  });

  const inputHandler = e => {
    const name = e.target.name;
    const value = e.target.value;

    setInput(prev => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = () => {
    if (input.email && input.name) {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/home");
    }
  };

  console.log(input);

  return (
    <div className="login">
      <input
        onChange={inputHandler}
        type="text"
        placeholder="enter you name"
        name="name"
      />
      <input
        onChange={inputHandler}
        type="email"
        placeholder="enter your email"
        name="email"
      />
      <button onClick={submitHandler}>submit</button>
    </div>
  );
};

export default Login;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "axios";

function Home() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, status } = await axios.get("http://localhost:3000/users");
    if (status === 200) {
      setUsers(data);
    }
  };

  const LogOut = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="home">
      <div className="top">
        <NavLink>
          <h2>Add Employee</h2>
        </NavLink>
        <button onClick={LogOut}>LogOut</button>
      </div>
      <div className="nav">
        <p>id</p>
        <p>firstName</p>
        <p>lastName</p>
        <p>email</p>
        <p>salary</p>
        <p>gender</p>
      </div>
      {users.map(user => (
        <div className="user">
          <p>{user.id}</p>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
          <p>{user.salary}</p>
          <p>{user.gender}</p>
          <button>show</button>
          <button>edit</button>
          <button className="delet">Delete</button>
        </div>
      ))}

      
    </div>
  );
}

export default Home;

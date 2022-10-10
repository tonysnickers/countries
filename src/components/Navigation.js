import React from 'react'
import { NavLink } from "react-router-dom";
import Home from '../pages/Home';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
      <NavLink to={"/"}>
        <li>Home</li>
      </NavLink>
      <NavLink to={"/about"}>
        <li>Home</li>
      </NavLink>

      </ul>
    </div>
  )
}

export default Navigation

import React from "react";
import style from "./nav.module.css";
import { NavLink, Outlet, } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav className={style.nav}>
      <div className={style.container}>
        <div className={style.titlecon}>
            <img src="https://github.com/abhishekdangi006/image/assets/76874880/53774aea-b656-4530-9f61-752b46e58e63" alt="suneeta"/>
            <h4>Sunita Sharma</h4>
        </div>
        <div className={style.menucon}>
        <NavLink to={""} className={style.link} style={({ isActive }) => ({
    color: isActive ? 'red' : ''})}><h4>Home</h4></NavLink>
        <NavLink to={"myday"} className={style.link} style={({ isActive }) => ({
    color: isActive ? 'red' : ''})}><h4>MY Day</h4></NavLink>
        <NavLink to={"routine"} className={style.link} style={({ isActive }) => ({
    color: isActive ? 'red' : ''})}><h4>Daily Routine</h4></NavLink>
        <NavLink to={"medicine"} className={style.link} style={({ isActive }) => ({
    color: isActive ? 'red' : ''})}><h4>Medicine Checklist</h4></NavLink>
        <NavLink to={"meal"} className={style.link} style={({ isActive }) => ({
    color: isActive ? 'red' : ''})}><h4>Healthy Meal</h4></NavLink>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;
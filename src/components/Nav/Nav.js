import React from "react";
import { NavLink, Outlet, } from "react-router-dom";

function Nav() {
  return (
    <>
    <nav>
      <div >
        <div>
            <img src="https://github.com/abhishekdangi006/image/assets/76874880/53774aea-b656-4530-9f61-752b46e58e63" alt="suneeta"/>
            <h4>Sunita Sharma</h4>
        </div>
        <div>
        <NavLink to={""} className={"link"}><h4>Home</h4></NavLink>
        <NavLink to={"myday"} className={"link"}><h4>MY Day</h4></NavLink>
        <NavLink to={"routine"} className={"link"}><h4>Daily Routine</h4></NavLink>
        <NavLink to={"medicine"} className={"link"}><h4>Medicine Reminder</h4></NavLink>
        <NavLink to={"meal"} className={"link"}><h4>Healthy Meal</h4></NavLink>
        </div>
      </div>
    </nav>
    <Outlet/>
    </>
  );
}

export default Nav;
import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import {  Button, Dropdown } from "antd";
import "./style.scss";
import Logo from '../../assets/images/login-logo.png'

function removeToken() {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("password");
}

const items = [
  {
    key: "1",
    label: (
      <div className="flex items-center gap-1">
        <i className="bx bx-cog text-[20px] "></i>
        <p>Sozlamalar</p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        className="flex items-center gap-1"
        to="/"
        onClick={() => removeToken()}
      >
        <i className="bx bx-log-out text-[20px] "></i>
        <p>Chiqish</p>
      </Link>
    ),
  },
];

const index = () => {
  const user = localStorage.getItem("username");

  return (
    <div className="ssss">
      <header className="flex items-center justify-between h-[80px] px-[50px] head">
        <a href="/"><img src={Logo} alt="logo"/></a>
        <div className="flex items-center gap-2">
          <i className="bx bx-menu text-[30px] hover:bg-[#0000001f] hover:rounded-[5px] p-[2px] cursor-pointer"></i>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottomRight"
            arrow
          >
            <Button type="text" className="flex items-center gap-5 login p-1">
              <div className="flex items-center gap-1 user">
                <i className="bx bxs-user-circle text-[30px]"></i>
                <p>{user ? `${user}` : "User Name"}</p>
              </div>
            </Button>
          </Dropdown>
        </div>
      </header>

      <div className="down">
        <div className="sidebar">
          <ul>
            <li>
              <NavLink to="/dashboard" className="nav__link">

                <i className="bx bxs-home text-[24px] text-[#1b2336]"></i>
                <p>Dashboard</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/oquvchilar" className="nav__link">
                <i className="bx bx-child text-[24px] text-[#1b2336]"></i>
                <p>O&apos;quvchilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/kurslar" className="nav__link">
                <i className="bx bxs-book-alt text-[24px] text-[#1b2336]"></i>
                <p>Kurslar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/buyurtmachilar" className="nav__link">
                <i className="bx bxs-user-voice text-[24px] text-[#1b2336]"></i>
                <p>Buyurtmachilar</p>
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/xizmatlar" className="nav__link">
                <i className="bx bxs-taxi text-[24px] text-[#1b2336]"></i>
                <p>Xizmatlar</p>
              </NavLink>
            </li>
          </ul>
        </div>

        <main>
          <div className="outlet">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default index;

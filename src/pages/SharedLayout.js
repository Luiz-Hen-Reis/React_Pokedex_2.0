import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components";

const SharedLayout = () => {
  return (
    <main>
      <NavBar />
      <div style={{  backgroundColor: 'var(--navy-blue)', color: 'var(--white-text)' }}>
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;

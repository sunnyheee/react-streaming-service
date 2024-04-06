import React, { Children } from "react";
import PageNavbar from "../components/PageNavbar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <PageNavbar />
      <Outlet />
    </>
  );
};

export default AppLayout;

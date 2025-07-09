import React from "react";
import { Outlet } from "react-router-dom";

function Plans() {
  return (
    <>
      <div>Plans</div>
      <Outlet />
    </>
  );
}

export default Plans;

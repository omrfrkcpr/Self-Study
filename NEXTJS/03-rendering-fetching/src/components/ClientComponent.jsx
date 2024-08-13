"use client";

import React from "react";

const ClientComponent = ({ children }) => {
  console.log("client component");
  return (
    <>
      <div onClick={() => alert("i am client")}>ClientComponent</div>
      {children}
    </>
  );
};

export default ClientComponent;

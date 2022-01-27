import React from "react";
import routerProvider from "@pankod/refine-react-router";

const { Link } = routerProvider;

export const Title = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <img
        src={""}
        alt="WBS"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px 24px",
        }}
      />
    ) : (
      <img
        src={"https://www.worshipsong.com/images/ws-logo.png"}
        alt="Refine"
        style={{
          width: "200px",
          padding: "12px 24px",
        }}
      />
    )}
  </Link>
);

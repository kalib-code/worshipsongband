import React from "react";
import routerProvider from "@pankod/refine-react-router";

const { Link } = routerProvider;

export const Title = ({ collapsed }) => (
  <Link to="/">
    {collapsed ? (
      <img
        src={"http://localhost:1337/uploads/logo_a773acf2b1.png?updated_at=2022-01-28T06:46:59.826Z"}
        alt="WBS"
        style={{
          display: "flex",
          width: "50px",
          alignItems: "center",
          justifyContent: "center",
         // padding: "10px 10px 10px  0px",
         margin: "20px",
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

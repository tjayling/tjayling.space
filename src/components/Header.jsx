import React from "react";
import { Link } from "react-router-dom";

const header = () => {
  return (
    <div className="header-container">
      <Link className="link" to="/">
        <h1 className="title">tjayling.space</h1>
      </Link>
    </div>
  );
};

export default header;

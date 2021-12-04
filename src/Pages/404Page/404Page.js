import React from "react";

const NoMatch = ({ history }) => {
  return (
    <div style={{ marginLeft: "15px" }}>
      <h2>404Page</h2>
      <p>
        Redirecting to{" "}
        <span
          style={{ color: "gainsboro", cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          Login Page
        </span>
      </p>
    </div>
  );
};

export default NoMatch;

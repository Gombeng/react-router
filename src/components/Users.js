import React from "react";
import { Outlet, NavLink, useSearchParams } from "react-router-dom";

export default function Users() {
  const [seacrhParams, setSearchParams] = useSearchParams();
  const showActiveUsers = seacrhParams.get("filter") === "active";

  return (
    <div className="container">
      <h1>Select user</h1>
      <div className="users nav-wrapper">
        <NavLink to="1">User 1</NavLink>
        <NavLink to="2">User 2</NavLink>
        <NavLink to="3">User 3</NavLink>
      </div>

      <Outlet />

      <div>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Active Users
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>

      {showActiveUsers ? (
        <h2>Showing Active Users</h2>
      ) : (
        <h2>Showing All Users</h2>
      )}
    </div>
  );
}

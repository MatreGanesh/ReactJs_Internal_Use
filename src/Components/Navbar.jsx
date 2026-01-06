import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="m-3">
      <nav>
        <NavLink
          to="/debouncing"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          Debouncing
        </NavLink>
        <NavLink
          to="/throttling"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          Throttling
        </NavLink>
        <NavLink
          to="/hoisting"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          Hoisting
        </NavLink>
        <NavLink
          to="/useCallback"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          useCallback
        </NavLink>
        <NavLink
          to="/liftingStateUp"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          LiftingStateUp
        </NavLink>
        <NavLink
          to="/useEffect"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          useEffect
        </NavLink>
        <NavLink
          to="/lazyLoading"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          LazyLoading
        </NavLink>
        <NavLink
          to="/pagination"
          className={({ isActive }) => [
            "px-4 py-1 text-red-700", // always
            isActive && "font-bold border-b-2 border-blue-500", // only if active
          ]}
        >
          Pagination
        </NavLink>
      </nav>
    </div>
  );
}

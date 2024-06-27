import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink
      exact="true"
      to="/"
      className={({ isActive }) =>
        isActive ? styles.activeLink : styles.link
      }>
      Home
    </NavLink>
    <NavLink
      to="/movies"
      className={({ isActive }) =>
        isActive ? styles.activeLink : styles.link
      }>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;

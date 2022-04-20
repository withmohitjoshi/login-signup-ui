import React, { useState } from "react";
import style from "../Styles/style.module.css";
export default function Login({ callback }) {
  return (
    <>
      <form
        className={style.box}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <hi className={style.heading}>Login</hi>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="Submit" value="Login" />
        <p onClick={callback}>Don't have an account?</p>
      </form>
    </>
  );
}

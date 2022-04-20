import React from "react";
import style from "../Styles/style.module.css";

export default function Signup({ callback }) {
  return (
    <>
      <form
        className={style.box}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <hi className={style.heading}>SignUp</hi>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="Submit" value="Sign Up" />

        <p onClick={callback}>Already have an account?</p>
      </form>
    </>
  );
}

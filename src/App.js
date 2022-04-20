import React, { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  const [haveAccount, setHaveAccount] = useState(true);

  const handleHaveAccount = () => {
    setHaveAccount((prevState) => !prevState);
  };
  return haveAccount ? (
    <Login callback={handleHaveAccount} />
  ) : (
    <Signup callback={handleHaveAccount} />
  );
}

export default App;

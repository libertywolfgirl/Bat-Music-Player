import React from "react";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

import { Container } from "./styles/App.styles";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");

  return <Container>{code ? <Dashboard code={code} /> : <Login />}</Container>;
};

export default App;

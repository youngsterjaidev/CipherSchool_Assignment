import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import { Home, Profile } from "./pages";

export default () => {
  return (
    <div>
      <Router>
        <Home path="/" />
        <Profile path="/profile" />
      </Router>
    </div>
  );
};

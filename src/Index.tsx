import React from "react";
import ReactDOM from "react-dom";
import { App } from "./_App";

export const Index = () => {
  return (
      <App />
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));

import React from "react";

import "./App.css";
import Alert from "./Alert";

const App: React.FC = () => {
  return (
    <div>
      <Alert message="ola ola" type="success" />
    </div>
  );
};

export default App;

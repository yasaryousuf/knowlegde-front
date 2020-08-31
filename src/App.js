import React from "react";
import "./App.css";
import Create from "./components/questions/Create";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Create} />
      </Switch>
    </div>
  );
}

export default App;

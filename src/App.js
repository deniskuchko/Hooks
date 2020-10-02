import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import SecondUseEffect from "./UseEffect/UseEffect";
import ThirdUseRef from "./UseRef/UseRef";
import FirstUseState from "./UseState.js/UseState";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/useState" render={() => <FirstUseState />} />
          <Route path="/useEffect" render={() => <SecondUseEffect />} />
          <Route path="/useRef" render={() => <ThirdUseRef />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

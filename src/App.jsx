import React from "react";
import "./App.scss";

// Router
import {
   BrowserRouter as Router,
   Route,
   Link,
   Switch,
   BrowserRouter,
} from "react-router-dom";

// Componets
import Login from "./components/Pages/Login";

function App() {
   return (
      <div className="App">
         <BrowserRouter>
            <Switch>
               <Route path="/" component={Login} exact />
            </Switch>
         </BrowserRouter>
      </div>
   );
}

export default App;

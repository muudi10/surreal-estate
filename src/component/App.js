import "../styles/App.css";
import { Route, Switch} from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

function App() {
  return (
    <div className="App">
      <Navbar />
   
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route path="/add-property" >
          <AddProperty />
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;

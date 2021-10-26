import "../styles/App.css";
import React from "react";
import { Route, Switch} from "react-router-dom";
import {DataContextProvider, DataContext} from "../context/DataContext"
import Navbar from "./Navbar";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import Search from "./Search";
import 'bulma/css/bulma.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import connection from "../API/API";
function App() {
  
  return (
    < DataContextProvider > 
    
    <div className="App container">
      <Navbar />
   <Search/>
      <Switch>
        <Route exact path="/">
          <Properties />
        </Route>
        <Route path="/add-property" >
          <AddProperty />
        </Route>
        
      </Switch>
      
    </div>  
    </DataContextProvider>
  );
}

export default App;

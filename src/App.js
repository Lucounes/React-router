import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts/Contacts";
import {Switch , Route} from "react-router-dom";

function App(){

const idade = 18
const nome = 'Lucao' ;

  return(
    <div>
      <Switch>
          <Route path = {"/About"} render = {()=> <About nome = {nome}/>}/>
          <Route path = "/Contacts" component = {Contacts}/>
          <Route path = "/" render = {()=> <Home idade = {idade}/>}/>

      </Switch>
    </div>
  );
}

export default App;
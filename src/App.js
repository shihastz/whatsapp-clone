import React, {useState} from "react"
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import { useStatevalue } from './StateProvider'


function App() {
  const [{ user }, dispatch] = useStatevalue()
  return (
      <div className="app">
        {!user ? (
          <Login/>
        ): (
          <div className="app__body">
            <Router>
            <Sidebar/>
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <Chat/>
                </Route>
              </Switch>
            </Router>
            
          </div>
          
        )}
        <span className="made_by">Made By Shihas</span>
      </div> 
  );
}

export default App;

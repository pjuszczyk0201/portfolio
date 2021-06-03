import React from 'react';
import  {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './scss/main.scss';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register"
import Logout from "./components/Logout";

const App = () => {
  return (
      <Router>
        <Switch className="container">
          <Route exact path="/" component={Home}/>
          <Route path="/logowanie" component={Login}/>
          <Route path="/wylogowano" component={Logout}/>
          <Route path="/rejestracja" component={Register}/>
        </Switch>
      </Router>
  );
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Header from "./component/header/header";
import SlideHeader from "./component/header/slide_header/slide_header"
import LoginRegister from "./component/login_register/login_register";
/*import Navbar from "./component/Navbar";
import Register from "./component/register";*/
import Login from "./component/login_register/login/login"

class App extends Component {
  /*constructor(props){
    super(props);
    this.state = {
        stateFiterandslide_img:false
    }
  }*/
  render(){
    return (
      <Router>
        <div>
          <LoginRegister/>
        </div>
      </Router>
      
    );
  }
  
}
export default App;

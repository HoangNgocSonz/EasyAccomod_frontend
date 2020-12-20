import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/header/header";
import Login from "./component/login__register/login/login";
import LoginRegister from "./component/login__register/login__register";
import SlideHeader from "./component/header/slide_header/slide_header";
import { Slide } from "@material-ui/core";
import Footer from "./component/footer/footer";
import HomePage from "./component/home/HomePage";
import RoomList from "./component/home/roomList/RoomList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <HomePage></HomePage>
            something
          </div>
        </Router>
      </div>
    );
  }
}
export default App;

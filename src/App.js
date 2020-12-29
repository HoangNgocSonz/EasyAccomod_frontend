import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SlideHeader from "./component/header/slide_header/slide_header";
import { Slide } from "@material-ui/core";
import HomePage from "./component/home/HomePage";
import RoomDetail from "./component/roomDetail/RoomDetail";
import Admin from "./component/admin/admin";
import Favourite from "./component/favorite/Favourite";
import NewsHome from "./component/newHome/new_news";
import Dashboard from "./component/dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/">
              <HomePage></HomePage>
            </Route>
            <Route
              exact
              path="/detail/:_id"
              render={(props) => {
                return <RoomDetail {...props} />;
              }}
            />

            <Route exact path="/favourite">
              <Favourite></Favourite>
            </Route>
            <Route exact path="/postNew">
              <NewsHome></NewsHome>
            </Route>
            <Route exact path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route exact path="/admin">
              <Admin></Admin>
            </Route>
          </div>
          {/* <Admin /> */}
        </Router>
      </div>
    );
  }
}
export default App;

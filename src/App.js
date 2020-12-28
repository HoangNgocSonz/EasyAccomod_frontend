import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SlideHeader from "./component/header/slide_header/slide_header";
import { Slide } from "@material-ui/core";
import HomePage from "./component/home/HomePage";
import RoomDetail from "./component/roomDetail/RoomDetail";
import Admin from "./component/admin/admin"
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
          </div>
      </Router>

    </div>
    );
  }
}
export default App;

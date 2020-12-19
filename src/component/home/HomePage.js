import React, { Component } from "react";
import RoomList from "./roomList/RoomList";
import Header from "../header/header";
import Footer from "../footer/footer";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <RoomList></RoomList>
        <Footer></Footer>
      </div>
    );
  }
}

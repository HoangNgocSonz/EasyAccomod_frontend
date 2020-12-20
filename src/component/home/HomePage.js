import React, { Component } from "react";
import RoomList from "./roomList/RoomList";
import Header from "../header/header";
import Footer from "../footer/footer";
import Inforuser from "../newHome/infor_user/infor_user";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <RoomList></RoomList>
        <Inforuser></Inforuser>
        <Footer></Footer>
       
      </div>
    );
  }
}

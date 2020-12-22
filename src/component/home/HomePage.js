import React, { Component } from "react";
import RoomList from "./roomList/RoomList";
import Header from "../header/header";
import Footer from "../footer/footer";
import Inforuser from "../newHome/infor_user/infor_user";
import ChangePassword from "../newHome/change_password/change_password";
import NewsDetail from "../newsdetail/newsdetail";
import NewsHome from "../newHome/new_news/new_news";
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <RoomList></RoomList>
        <Inforuser></Inforuser>
        <ChangePassword></ChangePassword>
        <NewsHome/>
        <NewsDetail></NewsDetail>
        <Footer></Footer>
       
      </div>
    );
  }
}

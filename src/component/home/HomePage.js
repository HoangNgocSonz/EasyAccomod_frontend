import React, { Component } from "react";
import RoomList from "./roomList/RoomList";
import Header from "../header/header";
import Footer from "../footer/footer";
import Inforuser from "../newHome/infor_user/infor_user";
import ChangePassword from "../newHome/change_password/change_password";
import NewsHome from "../newHome/new_news/new_news";
import Report from "../newHome/report_news/report_news";
import Admin from "../admin/admin";
import Filter from "../header/filter/filter";
import SlideHeader from "../header/slide_header/slide_header";
import Navbar from "../menu/Navbar";
import Feedback from "../newHome/feedback/feedback";
import FormPost from "../user/FornPost";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <FormPost></FormPost>
        <Navbar></Navbar>
        <SlideHeader></SlideHeader>
        <Filter></Filter>
        <RoomList></RoomList>
        <Inforuser></Inforuser>
        <ChangePassword></ChangePassword>
        <NewsHome />
        <Feedback />
        <Footer />
      </div>
    );
  }
}

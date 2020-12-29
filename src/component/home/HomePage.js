import React, { Component } from "react";
import RoomList from "./roomList/RoomList";
import Header from "../header/header";
import Footer from "../footer/footer";
import Inforuser from "../newHome/infor_user/infor_user";
import ChangePassword from "../newHome/change_password/change_password";

import Report from "../newHome/report_news/report_news";
import Admin from "../admin/admin";
import Filter from "../header/filter/filter";
import SlideHeader from "../header/slide_header/slide_header";
import Navbar from "../menu/Navbar";
import Feedback from "../newHome/feedback/feedback";
import FormPost from "../user/FornPost";
import Favourite from "../favorite/Favourite";
import { Router } from "react-router-dom";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterString: "",
      kindOfMoterFilter: "",
    };
  }
  callbackFunction = (childData) => {
    console.log(childData);
    this.setState({ filterString: childData });
  };
  setKindOfMoterFilter = (childData) => {
    console.log(childData);
    if (childData != "0") {
      this.setState({
        kindOfMoterFilter: childData,
      });
    } else {
      this.setState({
        kindOfMoterFilter: "",
      });
    }
  };
  render() {
    return (
      <div>
        {/* <button onClick={() => this.try()}>submit cha</button> */}
        <Navbar
          try={this.try}
          parentCallback={this.callbackFunction}
          setKindOfMoterFilter={this.setKindOfMoterFilter}
        ></Navbar>
        <SlideHeader></SlideHeader>
        <Filter setKindOfMoterFilter={this.setKindOfMoterFilter}></Filter>
        <RoomList
          filterString={this.state.filterString}
          kindOfMoterFilter={this.state.kindOfMoterFilter}
        ></RoomList>
        <Inforuser></Inforuser>
        <ChangePassword></ChangePassword>
        {/* <NewsHome /> */}
        <Footer />
      </div>
    );
  }
}

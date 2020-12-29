import React, { Component } from "react";
import "./Dashboard.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../menu/Navbar";
import Filter from "../header/filter/filter";
import Inforuser from "../newHome/infor_user/infor_user";
import ChangePassword from "../newHome/change_password/change_password";
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motel: [],
    };
  }

  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Filter></Filter>
        <Inforuser></Inforuser>
        <ChangePassword></ChangePassword>
      </div>
    );
  }
}

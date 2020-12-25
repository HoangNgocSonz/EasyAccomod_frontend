import React, { Component } from "react";
import "./Navbar.css";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import LoginRegister from "../login__register/login__register";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Accomod</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <button className="directional">Thuê phòng trọ</button>
              <span>/</span>
              <button className="directional">Thuê căn hộ</button>
              <span>/</span>
              <button className="directional">Yêu thích</button>
            </Nav>

            {/* <button className="login">Đăng nhập</button>
            <sapn>/</sapn>
            <button className="logout">Đăng ký</button>
            <sapn>/</sapn>
            <button className="logout">Đăng tin mới</button> */}
            <LoginRegister></LoginRegister>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Tìm kiếm"
                className="mr-sm-2"
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

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
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Link to="/">
            <Navbar.Brand href="#home">Accomod</Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <button className="directional">Thuê phòng trọ</button>

              <button className="directional">Thuê căn hộ</button>
              <Link to="/favourite">
                <button className="directional">Yêu thích</button>
              </Link>

              <LoginRegister></LoginRegister>
            </Nav>

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

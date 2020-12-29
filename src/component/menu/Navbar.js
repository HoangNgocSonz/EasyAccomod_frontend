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
  sendData = () => {
    this.props.parentCallback(document.getElementById("stringForFilter").value);
  };
  filterMotel() {
    this.props.setKindOfMoterFilter("Nhà trọ", "");
  }
  filterApartment() {
    this.props.setKindOfMoterFilter("Căn hộ", "");
  }
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
              <button
                className="directional"
                onClick={this.filterMotel.bind(this)}
              >
                Thuê phòng trọ
              </button>

              <button
                className="directional"
                onClick={this.filterApartment.bind(this)}
              >
                Thuê căn hộ
              </button>
              <Link to="/favourite">
                <button className="directional" id="NavbarFavourite">
                  Yêu thích
                </button>
              </Link>

              <LoginRegister></LoginRegister>
            </Nav>

            <Form inline>
              <FormControl
                type="text"
                placeholder="Tìm kiếm"
                className="mr-sm-2"
                id="stringForFilter"
                onChange={this.sendData}
              />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

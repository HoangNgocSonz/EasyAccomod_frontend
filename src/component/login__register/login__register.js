import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./login__register.css";
import Login from "./login/login";
import Register from "./register/register";
import OwnRegister from "./register/own_register";
import axios from "axios";
import ChangePassword from "../newHome/change_password/change_password";
import Inforuser from "../newHome/infor_user/infor_user";
import { Link } from "react-router-dom";
class LoginRegister extends Component {
  logout() {
    localStorage.removeItem("user");
  }

  render() {
    return (
      <div className="navbar navbar-expand-sm header1_info_right__div-login_register">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              to="/nguoi-dung/dang-nhap"
              className="nav-link"
              data-toggle="modal"
              data-target="#modalLoginForm"
              id="deleteStyle"
            >
              Đăng nhập
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              id="deleteStyle"
              to="/nguoi-dung/dang-ky"
              className="nav-link"
              data-toggle="modal"
              data-target="#modalRegisterForm"
            >
              Đăng ký
            </NavLink>
          </li>
        </ul>

        <div className="btn-group">
          {/* Menu Website if User login success (Menu website nếu user đăng nhập thành công)*/}
          <button
            type="button"
            className="btn dropdown-toggle bnt_btuserprofile"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            id="buttonMoreNavbar"
          >
            {" "}
          </button>
          <div className="dropdown-menu dropdown-menu-right">
            <button className="dropdown-item dropdown-menu_btn" type="button">
              <NavLink to="/nguoi-dung/sua-thong-tin">
                <Link to="/dashboard">Thông tin cơ bản</Link>
              </NavLink>
            </button>
            <button
              className="dropdown-item dropdown-menu_btn"
              onClick={this.OpenModalChangePassword}
              type="button"
            >
              Đổi mật khẩu
            </button>
            <button
              className="dropdown-item dropdown-menu_btn"
              type="button"
              onClick={this.logout}
            >
              Đăng xuất
            </button>
            <button
              className="dropdown-item dropdown-menu_btn"
              type="button"
              onClick={this.logout}
            >
              <Link to="/quan_ly_chu_tro">Quản lý chủ trọ</Link>
            </button>
            <button
              className="dropdown-item dropdown-menu_btn"
              type="button"
              onClick={this.logout}
            >
              <Link to="/quan_ly_bai_dang">Quản lý bài đăng</Link>
            </button>
            {/* <button
              className="dropdown-item dropdown-menu_btn hidden-change-password"
              type="button"
              id="HiddenChangePassword"
              data-toggle="modal"
              data-target="#modalChangePassword"
            >
              HiddenChangePassWord
            </button> */}
          </div>
        </div>

        {/* Link đăng tin mới lên website */}

        <ul className="navbar-nav">
          <li className="nav-item">
            {!localStorage.user ? (
              <NavLink
                to="/nguoi-dung/dang-tin-moi"
                className="nav-link"
                data-toggle="modal"
                data-target="#modalLoginForm"
                id="deleteStyle"
              >
                Đăng tin mới
              </NavLink>
            ) : (
              <span
                to="/nguoi-dung/dang-tin-moi"
                className="nav-link"
                id="deleteStyle"
              >
                <Link to="postNew">
                  <span className="postNewSubmit">Đăng tin mới</span>
                </Link>
              </span>
            )}
          </li>
        </ul>
        <div>
          <Login />
        </div>
        <div
          className="modal fade"
          id="modalRegisterForm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <Register />
        </div>
        <div
          className="modal fade"
          id="modalOwnRegisterForm"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <OwnRegister />
        </div>
      </div>
    );
  }
}

export default LoginRegister;

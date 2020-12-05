import React, { Component } from "react";
import "./register.css";
class Register extends Component {
    render() {
        return (
            <form className="register">
                <h1>Đăng ký</h1>
                <input placeholder="Tên đăng nhập" type="text" required="" />
                <input placeholder="Email" type="email" required="" />
                <input id="pass" placeholder="Mật khẩu" type="password" />
                <input id="cf-pass" placeholder="Nhập lại mật khẩu" type="password" />
                <button>Đăng ký</button>
                <div className="go-sign-in">
                <p>Bạn đã có tài khoản? </p>
                <a href="">
                    Đăng nhập
                </a>
                </div>
            </form>
          );
    }
}
export default Register;
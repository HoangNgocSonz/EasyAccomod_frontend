import React, { Component } from "react";
import "./login.css";
class Login extends Component {
    render() {
        return (
            <form className="login">
              <h1>Đăng nhập</h1>
              <input
                placeholder="Email"
                className="inputEmail"
                id="email"
                type="email"
                required
              />
              <input placeholder="Mật khẩu" id="password" type="password" required />
              <button type="submit">Đăng nhập</button>
              <a href="">Quên mật khẩu?</a>
              <div className="create-acc">
                <p>Bạn chưa có tài khoản? </p>
                <a href="">
                  Đăng ký
                </a>
              </div>
            </form>
          );
        }
}
export default Login;
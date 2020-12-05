import React, { Component } from "react";
//import "../login/login.css"
class Login extends Component {
    /*render() {
        return (
            <form className="login" id="modalLoginForm">
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
        }*/


        render() {
       
          return (
          <div className="modal fade" id="modalLoginForm" >
              <div className="modal-dialog" role="document">
                  <div className="modal-content">
                      <div className="modal-header text-center">
                      <h4 className="modal-title w-100 font-weight-bold">Đăng nhập</h4>
                      <button type="button" className="close" id="closelogin" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true" >×</span>
                      </button>
                      </div>
                      <div className="modal-body mx-3">
                      
                      <div className="md-form mb-4 row">
                          <div className="col-md-2 col-sm-2 col-xs-3 icon_username">
                          </div>
                          <div className="col-md-10 col-sm-8 col-xs-9 inputusername">
                                  <input type="text" 
                                  className="form-control " 
                                  placeholder="Tên đăng nhập"
                                  ref="username"
                                 />
                          </div>
                      </div>
                      <div className="md-form mb-3 row">
                          <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                                  <input type="password" 
                                  id="defaultForm-pass" 
                                  className="form-control " 
                                  placeholder="Mật khẩu"
                                  ref="password"
                                  />
                          </div>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
          );
      }
}
export default Login;
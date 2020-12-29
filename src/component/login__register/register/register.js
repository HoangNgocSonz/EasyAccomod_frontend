import React, { Component } from "react";
import axios from "axios";
import img_icon_login from "../image_icon_LaR/avatar.png";
import img_icon_password from "../image_icon_LaR/lock.png";
import img_icon_email from "../image_icon_LaR/email.png";
import img_icon_phone from "../image_icon_LaR/phone.png";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      phone: "",
      verifypassword: "",
      firstname: "",
      lastname: "",
      message: "",
      result: "",
    };
  }
  handleSubmitRegister = async () => {
    let {
      username,
      password,
      email,
      phone,
      verifypassword,
      firstname,
      lastname,
    } = this.state;
    if (
      !username ||
      !password ||
      !email ||
      !verifypassword ||
      !firstname ||
      !lastname ||
      !phone
    ) {
      this.setState({
        message: "Vui lòng nhập đầy đủ thông tin!!",
      });
    } else {
      if (password === verifypassword) {
        this.setState({
          message: "Đăng ký thành công!!!",
        });
        axios
          .post(`https://accomod.herokuapp.com/api/user`, {
            userName: document.getElementById("userNameRegister").value,
            password: document.getElementById("passwordRegister").value,
            email: document.getElementById("emailRegister").value,
            phone: document.getElementById("phoneRegister").value,
            position: "renter",
          })
          .then((res) => {
            console.log(res.data.data);
          })
          .catch((err) =>
            console.log("err: " + err + this.props.match.params._id)
          );
      } else {
        this.setState({
          message: "Nhập lại mật khẩu không khớp",
        });
      }
    }
  };

  handleChangeField = () => {
    this.setState({
      username: this.refs.username.value,
      password: this.refs.password.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      verifypassword: this.refs.verifypassword.value,
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
    });
  };
  handleClickCloseRegister = () => {
    this.setState({
      username: "",
      password: "",
      email: "",
      phone: "",
      verifypassword: "",
      firstname: "",
      lastname: "",
      message: "",
      result: "",
    });
  };
  render() {
    var KTL = true;
    if (this.state.message.length > 0) {
      KTL = false;
    }
    return (
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h4 className="modal-title w-100 font-weight-bold">Đăng Ký</h4>

            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span
                aria-hidden="true"
                id="IdRegister"
                onClick={this.handleClickCloseRegister}
              >
                ×
              </span>
            </button>
          </div>

          <div className="modal-body mx-3">
            {!KTL && (
              <p className="error_message-login">{this.state.message}</p>
            )}

            <div className="md-form mb-4 row">
              <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Họ"
                  ref="firstname"
                  onChange={this.handleChangeField}
                  value={this.state.firstname}
                />
              </div>
              <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Tên"
                  ref="lastname"
                  onChange={this.handleChangeField}
                  value={this.state.lastname}
                />
              </div>
            </div>
            <div className="md-form mb-4 row">
              <div className="col-md-2 col-sm-2 col-xs-3 icon_username">
                <img src={img_icon_login} alt="icon" />
              </div>
              <div className="col-md-10 col-sm-8 col-xs-9 inputusername">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Tên đăng nhập"
                  ref="username"
                  onChange={this.handleChangeField}
                  value={this.state.username}
                  id="userNameRegister"
                />
              </div>
            </div>
            <div className="md-form mb-4 row">
              <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                <img src={img_icon_email} alt="icon" />
              </div>
              <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                <input
                  type="email"
                  className="form-control "
                  placeholder="Email"
                  ref="email"
                  id="emailRegister"
                  onChange={this.handleChangeField}
                  value={this.state.email}
                />
              </div>
            </div>
            <div className="md-form mb-4 row">
              <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                <img src={img_icon_password} alt="icon" />
              </div>
              <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                <input
                  type="password"
                  id="passwordRegister"
                  className="form-control "
                  placeholder="Mật khẩu"
                  ref="password"
                  onChange={this.handleChangeField}
                  value={this.state.password}
                />
              </div>
            </div>
            <div className="md-form mb-4 row">
              <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                <img src={img_icon_password} alt="icon" />
              </div>
              <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                <input
                  type="password"
                  className="form-control "
                  placeholder="Nhập lại mật khẩu"
                  ref="verifypassword"
                  onChange={this.handleChangeField}
                  value={this.state.verifypassword}
                />
              </div>
            </div>
            <div className="md-form mb-3 row">
              <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                <img src={img_icon_phone} alt="icon" />
              </div>
              <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Phone"
                  ref="phone"
                  id="phoneRegister"
                  onChange={this.handleChangeField}
                  value={this.state.phone}
                />
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-8 span_registerinlogin">
              <p>
                Bạn là chủ trọ đăng ký{" "}
                <Link
                  to="/nguoi-dung/chu-tro-dang-ky"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target="#modalOwnRegisterForm"
                >
                  ở đây
                </Link>
              </p>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-center bntdangnhap">
            <input
              type="button"
              className="btn btn-default"
              value="Đăng ký"
              onClick={this.handleSubmitRegister}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;

import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './login__register.css';
import Login from './login/login';
import Register from './register/register';
import axios from 'axios';
class LoginRegister extends Component {   
    

    render() {
      
        return (
            <div className="navbar navbar-expand-sm header1_info_right__div-login_register">
                <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to='/nguoi-dung/dang-nhap'  className="nav-link" data-toggle="modal" data-target="#modalLoginForm">Đăng nhập</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink  to='/nguoi-dung/dang-ky' className="nav-link" data-toggle="modal" data-target="#modalRegisterForm">Đăng ký</NavLink>
                            </li>
                </ul>
                :
                <div className="btn-group">
                    {/* Menu Website if User login success (Menu website nếu user đăng nhập thành công)*/}
                    <button type="button" className="btn dropdown-toggle bnt_btuserprofile" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item dropdown-menu_btn" type="button">
                            <NavLink  to='/nguoi-dung/sua-thong-tin' 
                            onClick={this.props.clickMovedOnUsertoApp}
                            >Thông tin cơ bản</NavLink>
                            </button>
                            <button className="dropdown-item dropdown-menu_btn" 
                            onClick={this.OpenModalChangePassword} type="button">
                            Đổi mật khẩu</button>
                            <button className="dropdown-item dropdown-menu_btn" 
                            type="button"
                            onClick={this.ClickLogout}>
                             Đăng xuất</button>
                             <button className="dropdown-item dropdown-menu_btn hidden-change-password" 
                            type="button" id="HiddenChangePassword" data-toggle="modal" data-target="#modalChangePassword"
                            >
                             HiddenChangePassWord</button>
                    </div>
                </div>
            
                    {/* Link đăng tin mới lên website */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink  to='/nguoi-dung/dang-tin-moi' className="nav-link" >Đăng tin mới</NavLink>
                        </li>
                    </ul>
                <div>
                    <Login/>
                </div>
                <div className="modal fade" id="modalRegisterForm" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <Register/>
                </div>
            </div>
        );
    }
}

export default LoginRegister;
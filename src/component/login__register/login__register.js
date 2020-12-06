import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './login__register.css';
import Login from './login/login';
import Register from './register/register';

class LoginRegister extends Component {   

    render() {
      
        return (
            <div className="navbar navbar-expand-sm header1_info_right__div-login_register">
                    <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink to='/nguoi-dung/dang-nhap' className="nav-link" data-toggle="modal" data-target="#modalLoginForm">Đăng nhập</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink  to='/nguoi-dung/dang-ky' className="nav-link" data-toggle="modal" data-target="#modalRegisterForm">Đăng ký</NavLink>
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
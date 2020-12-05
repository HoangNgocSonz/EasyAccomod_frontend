import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Login from "./login/login";
import './login_register.css';

class LoginRegister extends Component {
    render(){
        return(
            <div className="navbar navbar-expand-sm header1_info_right__div-login_register">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to = "/nguoi-dung/dang-nhap" className = "nav-link" data-toggle="modal" data-target="#modalLoginForm">Đăng nhập</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink  to='/nguoi-dung/dang-ky' className="nav-link" data-toggle="modal" data-target="#modalRegisterForm">Đăng ký</NavLink>
                    </li>
                </ul>


                <div>
                {/* Modal Login of Website (Form đăng nhập của website)*/}
                    <Login/>
                </div>
            </div>
        );
    }
}

export default LoginRegister;
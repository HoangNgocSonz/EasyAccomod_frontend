import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import './login__register.css';
import Login from './login/login';
import Register from './register/register';

class LoginRegister extends Component {   
    constructor(props) {
        super(props);
        this.state={
            data_toggle_news:'modal',
            data_target_news:'#modalLoginForm',
            data_toggle_news_fb:'modal',
            data_target_news_fb:'#modalLoginForm',
            result_infor_user:false,
            result_logout_user:false,
            username:"",
            role:"",
            number_phone:""
        }
    }
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
                    {/* Link đăng tin mới lên website */}
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink  to='/nguoi-dung/dang-tin-moi' className="nav-link" data-toggle={this.state.data_toggle_news} data-target={this.state.data_target_news}>Đăng tin mới</NavLink>
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
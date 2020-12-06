import React, { Component } from 'react';
import './header.css'
import img_icon_login from '../header/image_header/icon_login.png'
import LoginRegister from '../login__register/login__register';
import SlideHeader from './slide_header/slide_header';


class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row header1">
                    <div className="col-md-6 col-sm-6 col-xs-6 header1_info_right">
                        <LoginRegister/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
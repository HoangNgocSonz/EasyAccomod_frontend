import React, { Component } from 'react';
import './header.css'
import img_icon_login from '../header/image_header/icon_login.png'
import LoginRegister from '../login__register/login__register';
import SlideHeader from './slide_header/slide_header';
import Filter from './filter/filter';
import Menu from '../menu/menu';
import Datenow from './date/datenow';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid" id = "header">
                <div className="row header1">
                    <div className="col-md-6 col-sm-6 col-xs-6 header1_info_left" >
                        <Datenow/>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 header1_info_right">
                        <LoginRegister/>
                        <div className="header1_info_right__div-img">
                             <img  src={img_icon_login} alt="icon_login"/>
                        </div>
                    </div>
                </div>
                <div className="row header2">
                    <div className = "row header2-slide-menu">
                        <Menu></Menu>
                    </div>
                    <div className="row header_slide">
                       <SlideHeader/>
                    </div>
                </div>
                <div className="row">
                    <div className="container form_filter">
                        <Filter></Filter>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
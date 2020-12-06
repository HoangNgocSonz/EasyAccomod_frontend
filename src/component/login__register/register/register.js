import React, { Component } from 'react';
import axios from 'axios';
import img_icon_login from '../image_icon_LaR/avatar.png';
import img_icon_password from '../image_icon_LaR/lock.png';
import img_icon_email from '../image_icon_LaR/email.png';
class Register extends Component {
    render() {
        
        return (
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Đăng Ký</h4>
                    <button type="button" className="close"  data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" id="IdRegister">×</span>
                    </button>
                </div>
                <div className="modal-body mx-3">

                <div className="md-form mb-5 row">
                        <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                                <input type="text" 
                                        className="form-control " 
                                        placeholder="Họ"
                                        ref="firstname"
                                       />
                                </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                                <input type="text" 
                                className="form-control " 
                                placeholder="Tên"
                                ref="lastname"
                                />
                        </div>
                    </div>
                    <div className="md-form mb-5 row">
                        <div className="col-md-2 col-sm-2 col-xs-3 icon_username">
                            <img src={img_icon_login} alt="icon"/>
                        </div>
                        <div className="col-md-10 col-sm-8 col-xs-9 inputusername">
                                <input type="text" 
                                className="form-control " 
                                placeholder="Tên đăng nhập"
                                ref="username"
                                />
                        </div>
                    </div>
                    <div className="md-form mb-5 row">
                        <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                                <img src={img_icon_password} alt="icon"/>
                        </div>
                        <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                            <input type="password"                                               
                            className="form-control " 
                            placeholder="Mật khẩu"
                            ref="password"
                            />
                        </div>
                    </div>
                    <div className="md-form mb-5 row">
                        <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                            <img src={img_icon_password} alt="icon"/>
                        </div>
                        <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                            <input type="password"                                                 
                            className="form-control " 
                            placeholder="Nhập lại mật khẩu"
                            ref="verifypassword"
                            />
                        </div>
                    </div>
                    <div className="md-form mb-4 row">
                        <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                            <img src={img_icon_email} alt="icon"/>
                        </div>
                        <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                            <input type="email"
                            className="form-control " 
                            placeholder="Email"
                            ref="email"
                            />
                        </div>
                    </div>
                </div>
                    <div className="modal-footer d-flex justify-content-center bntdangnhap">
                    <input type="button" className="btn btn-default" value="Đăng ký"/>
                    </div>
                </div>
        </div>
        );
    }
}

export default Register;
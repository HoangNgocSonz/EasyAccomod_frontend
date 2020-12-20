import React, { Component } from 'react';
import img_icon_password from './icon_change_password/lock.png';
class ChangePassword extends Component {
    render (){
        return (
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header text-center">
                <h4 className="modal-title w-100 font-weight-bold">Đổi mật khẩu</h4>
                <button type="button" className="close"  data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true" id="IDChangePassword" >×</span>
                </button>
            </div>
            <div className="modal-body mx-3">
                <div className="md-form mb-5 row">
                    <div className="col-md-2 col-sm-2 col-xs-3 icon_username">
                        <img src={img_icon_password} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputusername">
                            <input type="password" 
                            className="form-control " 
                            placeholder="Mật khẩu cũ"
                            ref="passwordold"    
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
                        placeholder="Mật khẩu mới"
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
                        placeholder="Nhập lại mật khẩu mới"
                        ref="verifypassword"
                    
                        />
                    </div>
                </div>
            </div>
                <div className="modal-footer d-flex justify-content-center bntdangnhap">
                <input type="button" className="btn btn-default" value="Lưu" />
                </div>
            </div>
        </div>
        );
    }
}
export default ChangePassword;
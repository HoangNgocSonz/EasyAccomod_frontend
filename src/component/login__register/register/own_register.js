import React, { Component } from 'react';
import axios from 'axios';
import img_icon_login from '../image_icon_LaR/avatar.png';
import img_icon_password from '../image_icon_LaR/lock.png';
import img_icon_email from '../image_icon_LaR/email.png';
import img_icon_phone from '../image_icon_LaR/phone.png';

class OwnRegister extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            email:'',
            phone:'',
            cmnd:'',
            verifypassword:'',
            firstname:'',
            lastname:'',
            message:'',
            result:'',
        } 
    }
    handleSubmitOwnRegister=async ()=>{
        let {username,password,email,phone,cmnd,verifypassword,firstname,lastname}=this.state;
        if(!username || !password || !email || !verifypassword ||!firstname || !lastname || !phone || !cmnd)
        {
            this.setState({
                message:"Vui lòng nhập đầy đủ thông tin!!"
            })
        }else{
            if(password===verifypassword)
            {
                await axios.post('/nguoi-dung/chu-tro-dang-ky',{
                    username,password,email,phone,cmnd,firstname,lastname
                 },{headers: {'Accept': 'application/json'}})
                .then(res => {
                    this.setState({
                        message:res.data.message,
                        result:res.data.result, 
                    });
                    if(res.data.result){
                        const close = document.getElementById("IdOwnRegister");
                        setTimeout(()=>{close.click()},1000*1);                     
                    }
                })
                .catch( (error) => console.log(error));  
            }else{
                this.setState({
                    message:"Nhập lại mật khẩu không khớp",
                })
            }
        }
       
        }
    
    handleChangeField=()=>{
        this.setState({
            username:this.refs.username.value,
            password:this.refs.password.value,
            email:this.refs.email.value,
            phone:this.refs.phone.value,
            cmnd:this.refs.cmnd.value,
            verifypassword:this.refs.verifypassword.value,
            firstname:this.refs.firstname.value,
            lastname:this.refs.lastname.value,
        })
    }
    handleClickCloseOwnRegister=()=>{
        this.setState({
            username:'',
            password:'',
            email:'',
            phone:'',
            vmnd:'',
            verifypassword:'',
            firstname:'',
            lastname:'',
            message:'',
            result:'',
       });
    }
    render() {
       
        var KTL=true;
        if(this.state.message.length>0){
            KTL=false;
        }
        return (
            <div className="modal-dialog" role="document" >
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Đăng Ký</h4>
                    
                    <button type="button" className="close"  data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" id="IdOwnRegister" onClick={this.handleClickCloseOwnRegister}>×</span>
                    </button>
                </div>
                <div className="modal-body mx-3 modal-nbody">
                {!KTL && 
                          <p  className="error_message-login">{ this.state.message} 
                          </p>
                }
                <div className="md-form mb-4 row">
                        <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                                <input type="text" 
                                        className="form-control " 
                                        placeholder="Họ"
                                        ref="firstname"
                                        onChange={this.handleChangeField}
                                        value={this.state.firstname}
                                       />
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 inputusername input_formname">
                                <input type="text" 
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
                        <img src={img_icon_login} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputusername">
                            <input type="text" 
                            className="form-control " 
                            placeholder="Tên đăng nhập"
                            ref="username"
                            onChange={this.handleChangeField}
                            value={this.state.username}
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
                        onChange={this.handleChangeField}
                        value={this.state.email}
                        />
                    </div>
                </div>
                <div className="md-form mb-4 row">
                    <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                            <img src={img_icon_password} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                        <input type="password"                                               
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
                        <img src={img_icon_password} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                        <input type="password"                                                 
                        className="form-control " 
                        placeholder="Nhập lại mật khẩu"
                        ref="verifypassword"
                        onChange={this.handleChangeField}
                        value={this.state.verifypassword}
                        />
                    </div>
                </div>
                <div className="md-form mb-4 row">
                    <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                        <img src={img_icon_login} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                        <input type="text"
                        className="form-control " 
                        placeholder="Số chứng minh nhân dân"
                        ref="cmnd"
                        onChange={this.handleChangeField}
                        value={this.state.cmnd}
                        />
                    </div>
                </div>
                <div className="md-form mb-2 row">
                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                            <select className="form-control nice-select wide select_item" name="tp">
                                        <option value='0'>Tỉnh/Thành Phố</option>
                            </select>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <select className="form-control nice-select wide select_item" name="qh">
                                      <option value='0'>Quận/huyện</option>
                            </select>
                        </div>
                        {/* <div className="col-md-4 col-sm-6 col-xs-6">
                            <select className="form-control nice-select wide select_item" name="px">
                                      <option value='0'>Phường/Xã</option>
                            </select>
                        </div> */}
                </div>    
                <div className="md-form mb-2 row">
                    <div className="col-md-2 col-sm-2 col-xs-3 icon_password">
                        <img src={img_icon_phone} alt="icon"/>
                    </div>
                    <div className="col-md-10 col-sm-8 col-xs-9 inputpassword">
                        <input type="text"
                        className="form-control " 
                        placeholder="Số điện thoại"
                        ref="phone"
                        onChange={this.handleChangeField}
                        value={this.state.phone}
                        />
                    </div>
                </div>
                    
  
                </div>
                    <div className="modal-footer d-flex justify-content-center bntdangnhap">
                    <input type="button" className="btn btn-default" value="Đăng ký"  onClick={this.handleSubmitOwnRegister}/>
                    </div>
                </div>
        </div>
      
        );
    }
}

export default OwnRegister;


import React, { Component } from 'react';
import './infor_user.css'

class Inforuser extends Component {
    render(){
        return (
            <div className="container-fluid">
          <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
              <h2 className="tieudepage_mg-h2">Chỉnh sửa thông tin cá nhân</h2>
              <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
          </div>
         </div>
       
        <div className="row info_news  wow fadeInUp"  data-wow-delay="0.1s">
          {/* left column */}
          <div className="col-md-3 form-change-image">
            <div className="text-center">
               <img src="https://static123.com/uploads/images/2018/12/12/boy_1544603222.png" className="avatar img-circle img-responsive" alt="avatar" />
              <h6>Upload a different photo...</h6>
              <input type="file" className="form-control" />
            </div>
          </div>
          {/* edit form column */}
          <div className="col-md-9 personal-info">            
            <h3>Thông tin</h3>
              <div className="form-group">
                <label className="col-lg-3 control-label">Họ:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text"
                  ref="firstname"
                />
                </div>
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Tên:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" 
                   ref="lastname"
                   />
                </div>
              </div>
              <div className=" form-group">
                 <label className="  col-lg-3 control-label">Giới tính:</label>
                 <div className=" col-lg-8">
                    <input className=" radio-sex" type="radio" name="gender"   ref="male"  
                    defaultChecked="male"
                  /> <span>Nam</span>
                    <input className=" radio-sex-female" type="radio" name="gender"  ref="female" 
                   
                    /> <span>Nữ</span>
                </div>
                    
              </div>
              <div className="form-group">
                <label className="col-lg-3 control-label">Email:</label>
                <div className="col-lg-8">
                  <input className="form-control" type="text" disabled
                   />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Tên đăng nhập:</label>
                <div className="col-md-8">
                  <input className="form-control" type="text" disabled
                 />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label">Số điện thoại:</label>
                <div className="col-md-8">
                  <input className="form-control" type="text" disabled
                 />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-3 control-label" />
                <div className="col-md-8">
                  <input type="button" className="btn btn-primary" defaultValue="Lưu" />
                </div>
              </div>

          </div>
        </div>
        </div>
        );
    }
}
export default Inforuser;
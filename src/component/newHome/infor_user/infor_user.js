import React, { Component } from 'react';
import './infor_user.css'

class Inforuser extends Component {
    render(){
        return (
<div className="wrapper bg-white mt-sm-5">
    <h4 className="pb-4 border-bottom">Chỉnh sửa thông tin tài khoản</h4>
    <div className="d-flex align-items-start py-3 border-bottom"> <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" className="img" alt=""/>
        <div className="pl-sm-4 pl-2" id="img-section"> <b>Ảnh đại diện</b>
           <div><input type="file" className=""/></div>
        </div>
    </div>
    <div className="py-3">
        <div className="row py-3">
            <div className="col-md-6"> <label for="firstname">Họ</label> <input type="text" className="bg-light form-control" placeholder="Nguyễn"/> </div>
            <div className="col-md-6 pt-md-0 pt-3"> <label for="lastname">Tên</label> <input type="text" className="bg-light form-control" placeholder="Thắm"/> </div>
        </div>
        <div className="row py-3">
            <div className="col-md-6"> <label for="email">Địa chỉ email</label> <input type="text" className="bg-light form-control" placeholder="tham2412tt1@gmail.com"/> </div>
            <div className="col-md-6 pt-md-0 pt-3"> <label for="phone">Số điện thoại</label> <input type="tel" className="bg-light form-control" placeholder="0987654321"/> </div>
        </div>
        <div className="row py-3">
            <div className="col-md-6"> <label for="">Giới tính</label> 
              <div>
              <input className=" radio-sex" type="radio" name="gender"   ref="male"  
                    defaultChecked="male"
                  /> <span>Nam</span>
                    <input className=" radio-sex-female" type="radio" name="gender"  ref="female" 
                   
                    /> <span>Nữ</span>
              </div>
             
            </div>
            <div className="col-md-6"> <label for="cmnd">Số chứng minh nhân dân</label> <input type="text" className="bg-light form-control" placeholder="125880443"/> </div>
        </div>
        <div className="row py-3">
            <div className="col-md-4"> <label for="city">Tỉnh/Thành phố</label> <select name="city" id="city" className="bg-light">
                    <option value="0" selected>Tỉnh/Thành phố</option>
                </select> </div>
              <div className="col-md-4"> <label for="district">Quận/Huyện</label> <select name="district" id="district" className="bg-light">
                  <option value="0" selected>Quận/Huyện</option>
              </select> </div>
              <div className="col-md-4"> <label for="city">Phường/Xã</label> <select name="sub-district" id="sub-distrct" className="bg-light">
                    <option value="0" selected>Phường/Xã</option>
                </select> </div>
        </div>
        <div className="py-3 pb-4 border-bottom"> <button className="btn btn-primary mr-3">Cập nhật</button> <button className="btn border button">Thoát</button> </div>
    </div>
</div>

        );
    }
}
export default Inforuser;
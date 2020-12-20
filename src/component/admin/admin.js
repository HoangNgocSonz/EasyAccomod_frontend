import React, { Component } from "react";
import "./admin.css"

class Admin extends Component{
    render(){
        return(
            <div class = "admin">
                <div class = "left_admin">
                    <h3>EasyAccomod</h3>
                    <li><span>QUẢN TRỊ</span></li>
                    <li><span>Danh sách Phòng trọ</span></li>
                    <li><span> Danh sách người dùng</span></li>
                    <li><span> Báo cáo nội dung</span></li>
                    <li><span> Thống kê</span></li>
                    <li><span> Xem Trang chủ</span></li>
                </div>
                <div class = "right_admin">
                    <div class = "top_admin">
                        <div></div>
                    </div>
                    <div class = "bottom_admin">
                        <div class ="table_admin">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;
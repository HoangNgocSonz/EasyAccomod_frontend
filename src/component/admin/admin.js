import React, { Component } from "react";
import {NavLink} from "react-router-dom"
import PhongTro from "./qlphongtro/manage_phongtro"
import "./admin.css"

class Admin extends Component{
    render(){
        return(
            <div class = "admin">
                <div class = "left_admin">
                    <h3>EasyAccomod</h3>
                    <li><span>QUẢN TRỊ</span></li>
                    <li><span data-target = "#phontro">Danh sách Phòng trọ</span></li>
                    <NavLink to='/admin/qlphongtro'  className="nav-link" data-toggle="modal" data-target="#phongtro">check</NavLink>
                    <li><span> Danh sách người dùng</span></li>
                    <li><span> Báo cáo nội dung</span></li>
                    <li><span> Thống kê</span></li>
                    <li><span> Xem Trang chủ</span></li>
                </div>
                <div class = "right_admin">
                    <div class = "top_admin">
                        <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
                            <h2 className="tieudepage_mg-h2">Quản lý tin Phòng Trọ</h2>
                            <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                        </div>
                    </div>
                    <div class = "bottom_admin">
                        <div class ="table_admin">
                            <div>
                                <PhongTro/>
                            </div>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Tiêu đề</th>
                                    <th scope="col">Danh mục</th>
                                    <th scope="col">Giá phòng</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Bỏ kiểm duyệt</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                                </thead>
                            </table>
                            <table className="table table-striped">
                                <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">Họ tên</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Quyền</th>
                                    <th scope="col">Trạng thái</th>
                                    <th scope="col">Chỉnh sửa</th>
                                    <th scope="col">Xóa</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin;
import React, { Component } from "react";
import {NavLink, Link} from "react-router-dom"
import {Route, Switch} from "react-router-dom"

import PhongTro from "./qlphongtro/manage_phongtro"
import ManageUser from "./manage_user/manage_user"

import "./admin.css"
import axios from 'axios';
class Admin extends Component{
    render(){
        return(
            <div class = "admin">
                <div class = "left_admin">
                    <h3>EasyAccomod</h3>
                    <ul class = "post_manager-menu-ul">
                        <li><span>QUẢN TRỊ</span></li>
                        <li className = "nav-item nav_menu_mg phontro">
                            <Link to='/admin/danh-sach-phong-tro' className = "nav-link nav_menu_mg phongtro">Danh sách phòng trọ</Link>
                        </li>
                        <li className = "nav-item nav_menu_mg">
                            <Link to = '/' className = "nav-link nav_menu_mg">Danh sách người dùng</Link>
                        </li>
                        <li className = "nav-item nav_menu_mg">
                            <Link to = '/admin/bao-cao-noi-dung' className = "nav-link nav_menu_mg">Báo cáo nội dung</Link>
                        </li>
                        <li className = "nav-item nav_menu_mg">
                            <Link to = '/admin/thong-ke' className = "nav-link nav_menu_mg">Thống kê</Link>
                        </li>
                        <li className = "nav-item nav_menu_mg">
                            <Link to = '/admin/xem-trang-chu' className = "nav-link nav_menu_mg">Xem trang chủ</Link>
                        </li>
                        {/*<li><span data-target = "#phontro">Danh sách Phòng trọ</span></li>
                        <NavLink to='/admin/qlphongtro'  className="nav-link" data-toggle="modal" data-target="#phongtro">check</NavLink>
                        <li><span> Danh sách người dùng</span></li>
                        <li><span> Báo cáo nội dung</span></li>
                        <li><span> Thống kê</span></li>
                        <li><span> Xem Trang chủ</span></li>*/}
                    </ul>
                </div>
                <div>
                    <Switch>
                        <Route exact path = "admin/danh-sach-phong-tro" component = {PhongTro}/>
                        <Route exact path = "/" component = {ManageUser}/>
                    </Switch>
                    
                </div>
              
               
                {/*
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
                </div>*/}
            </div>
        )
    }
}
export default Admin;
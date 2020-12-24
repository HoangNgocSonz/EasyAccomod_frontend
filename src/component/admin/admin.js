import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Route,Switch} from "react-router-dom";

import './admin.css'
import Postmanagement from "./post_management/post_management"
import ManageUse from "./manage_uses/manage_uses"
import ManageNT from "./manage_NT/manage_NT"

class Admin extends Component {
    render() {
        return (
            <div>
               <div className="row container">
                    <div id="sidebar-collapse" className="col-md-2 col-sm-2 sidebar">
                            <nav className="navbar navbar_mg">
                                <ul className="nav navbar-nav navbar_mg-ul">
                                        <div>
                                            <h2>EasyAccomod</h2>
                                            <li className="nav-link post_manager-memu" >Quản lý trọ cho thuê
                                                <ul className="post_manager-memu-ul">
                                                        <li className="nav-item nav_menu_mg">
                                                            <Link  to='/admin/quan-ly/phong-tro' className="nav-link nav_menu_mg ">Quản lý tin phòng trọ</Link>
                                                        </li>
                                                        <li className="nav-item nav_menu_mg">
                                                            <Link  to='/admin/quan-ly/nha-tro' className="nav-link nav_menu_mg ">Quản lý tin nhà trọ</Link>
                                                        </li>
                                                        <li className="nav-item nav_menu_mg">
                                                            <Link  to='/nguoi-dung/quan-ly-tin-dang/can-ho' className="nav-link nav_menu_mg ">Quản lý tin căn hộ</Link>
                                                        </li>
                                                    </ul>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/danh-sach-nguoi-dung' className = "nav-link nav_menu_mg">Danh sách người dùng</Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/bao-cao-noi-dung' className = "nav-link nav_menu_mg">Báo cáo nội dung</Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/thong-ke' className = "nav-link nav_menu_mg">Thống kê</Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/xem-trang-chu' className = "nav-link nav_menu_mg">Xem trang chủ</Link>
                                            </li>
                                        </div>
                                </ul>
                            </nav>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <Switch>
                            <Route  exact path="/admin/quan-ly/phong-tro" component={Postmanagement}/>  
                            <Route  exact path="/admin/danh-sach-nguoi-dung" component={ManageUse}/>          
                            <Route exact path = "/admin/quan-ly/nha-tro" component={ManageNT}/>
                        </Switch>
                    </div> 
                </div>
            </div>
        );
    }
}

export default Admin;
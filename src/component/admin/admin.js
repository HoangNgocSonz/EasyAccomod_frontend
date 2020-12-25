import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Route,Switch} from "react-router-dom";

import './admin.css'
import ManageNT from "./management_NT/management_NT"
import ManageUse from "./manage_uses/manage_uses"
import ManagePost from "./manage_post/manage_post"

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            showResult: 'true'
        }
    }
    render() {
        return (
            <div>
               <div className="row container">
                    <div id="sidebar-collapse" className="col-md-2 col-sm-2 sidebar">
                            <nav className="navbar navbar_mg">
                                <ul className="nav navbar-nav navbar_mg-ul">
                                        <div>
                                            <h2>EasyAccomod</h2><br/>
                                            <li style = {{fontWeight:'bold'}}><span>QUẢN TRỊ</span></li>
                                            <li className="nav-link post_manager-memu" >
                                                <Link to = '/admin/quan-li-nha-tro' className = "nav-link nav_menu_mg" ><span>Danh sách trọ cho thuê</span></Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/danh-sach-nguoi-dung' className = "nav-link nav_menu_mg" ><span>Danh sách chủ trọ</span></Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/danh-sach-bai-dang' className = "nav-link nav_menu_mg"><span>Danh sách bài đăng</span></Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/thong-ke' className = "nav-link nav_menu_mg"><span>Thống kê</span></Link>
                                            </li>
                                            <li className = "nav-link post_manager-memu">
                                                <Link to = '/admin/xem-trang-chu' className = "nav-link nav_menu_mg"><span>Xem trang chủ</span></Link>
                                            </li>
                                        </div>
                                </ul>
                            </nav>
                    </div>
                    <div className="col-md-10 col-sm-10">
                        <Switch>
                            <Route  exact path="/admin/quan-li-nha-tro" component={ManageNT}/>  
                            <Route  exact path="/admin/danh-sach-nguoi-dung" component={ManageUse}/>          
                            <Route  exact path="/admin/danh-sach-bai-dang" component={ManagePost}/>  
                        </Switch>
                    </div> 
                </div>    
            </div>
        );
    }
}

export default Admin;
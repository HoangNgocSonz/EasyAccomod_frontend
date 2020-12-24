import React, { Component } from "react";

import './managa_uses.css'

class ManageUse extends Component{
    render(){
        return(
            <div class = "post_container">
                <div className = "tieudepage_mg">
                    <h2 className="tieudepage_mg-h2">Quản lý người dùng</h2>
                </div>
            
                <div data-wow-delay="0.1s"> 
                
                        <table className="table table-striped" data-wow-delay="0.2s" id = "customers">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh đại diện</th>
                            <th>Email</th>
                            <th>Quyền</th>
                            <th>Trạng thái</th>
                            <th>Chỉnh sửa</th>
                            <th>Xóa người dùng</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Admin</td>
                                <td>Hoạt động</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Admin</td>
                                <td>Hoạt động</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Admin</td>
                                <td>Hoạt động</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
export default ManageUse
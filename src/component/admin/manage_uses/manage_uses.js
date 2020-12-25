import React, { Component } from "react";

import './managa_uses.css'

class ManageUse extends Component{
    render(){
        return(
            <div class = "post_container">
                <div className = "style_tieudepage_mg">
                    <h2 className="style_tieudepage_mg-h2">QUẢN LÝ CHỦ TRỌ</h2>
                    <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                </div>
            
                <div data-wow-delay="0.1s"> 
                    <div id = "main_table">
                    <br/>
                        <table className="table-striped" data-wow-delay="0.2s" id = "customers">
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
            </div>
        );
    }
}
export default ManageUse
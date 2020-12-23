import React, { Component } from "react";
import "./manage_user.css"

class ManageUser extends Component{
    render(){
        return(
            <div class = "phongtro">
                <div class = "right_admin">
                    <div class = "top_admin">
                        <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
                            <h2 className="tieudepage_mg-h2">Quản lý tin Phòng Trọ</h2>
                            <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                        </div>
                    </div>
                    <div class = "bottom_admin" data-wow-delay="0.1s">
                        <div class ="table_admin">
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
export default ManageUser;
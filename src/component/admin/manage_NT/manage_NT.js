import React, { Component } from 'react';
import axios from 'axios';


import './manage_NT.css'
class ManageNT extends Component {
    render() {
        return (
            <div class = "post_container">
                <div className = "tieudepage_mg">
                    <h2 className="tieudepage_mg-h2">Quản lý tin Nhà Trọ</h2>
                    <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                </div>
            
                <div data-wow-delay="0.1s"> 
                
                        <table className="table table-striped" data-wow-delay="0.2s" id = "customers">
                        <thead>
                        <tr>
                            <th>ID</th>
                            <th>Ảnh đại diện</th>
                            <th>Tiêu đề</th>
                            <th>Giá</th>
                            <th>Ngày bắt đầu</th>
                            <th>Ngày kết thúc</th>
                            <th>Trạng thái</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Cho thuê nhà trọ</td>
                                <td>Hết phòng</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Cho thuê nhà trọ</td>
                                <td>Còn nhà</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Cho thuê nhà trọ</td>
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

export default ManageNT;
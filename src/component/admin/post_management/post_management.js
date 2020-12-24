import React, { Component } from 'react';
import axios from 'axios';


import './post_management.css'
class Postmanagement extends Component {
    render() {
        return (
            <div class = "post_container">
                <div className = "tieudepage_mg">
                    <h2 className="tieudepage_mg-h2">Quản lý tin Phòng Trọ</h2>
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
                                <td>Cho thuê phòng trọ</td>
                                <td>2 000 000 VNĐ</td>
                                <td>Hoạt động</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td></td>
                                <td>Cho thuê phòng trọ</td>
                                <td>1 700 000 VNĐ</td>
                                <td>Hoạt động</td>
                                <td>Không</td>
                                <td>Không</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td></td>
                                <td>Cho thuê phòng trọ</td>
                                <td>2 500 000 VNĐ</td>
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

export default Postmanagement;
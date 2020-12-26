import React, { Component } from 'react';
import axios from 'axios';


import './management_NT.css'
class ManageNT extends Component {
    render() {
        return (
            <div class = "post_container" data-wow-delay="0.2s">
                <div className = "style_tieudepage_mg">
                    <h2 className="style_tieudepage_mg-h2">QUẢN LÝ TIN PHÒNG TRỌ</h2>
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
                                    <td>Cho thuê phòng trọ ở Cầu Giấy</td>
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
            </div>
        );
    }
}

export default ManageNT;
import React, { Component } from 'react';
import axios from 'axios';

class AcceptComment extends Component {
    render() {
        return (
            <div class = "post_container" data-wow-delay="0.2s">
                <div className = "style_tieudepage_mg">
                    <h2 className="style_tieudepage_mg-h2" style={{marginLeft:'-50px'}}>QUẢN LÝ PHẢN HỒI KHÁCH HÀNG</h2>
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
                                    <th>Tên người dùng</th>
                                    <th>Bình luận</th>
                                    <th>Chấp nhận</th>
                                    <th>Xóa</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td>Phạm Mai Linh</td>
                                    <td><span>Phòng trọ đầy đủ tiện nghi, website dễ dùng.</span>
                                    </td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td>Phạm Mai Linh</td>
                                    <td>Phòng trọ đầy đủ tiện nghi, website dễ dùng</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td>Phạm Mai Linh</td>
                                    <td>Phòng trọ đầy đủ tiện nghi, website dễ dùng</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td>Phạm Mai Linh</td>
                                    <td>Phòng trọ đầy đủ tiện nghi, website dễ dùng</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default AcceptComment;
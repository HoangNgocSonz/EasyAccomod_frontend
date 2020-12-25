import React, {Component} from "react";

import './manage_post.css'
class ManagePost extends Component{
    render() {
        return (
            <div class = "post_container" data-wow-delay="0.2s">
                <div className = "tieudepage_mg">
                    <h2 className="tieudepage_mg-h2">Quản lý bài đăng</h2>
                    <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                </div>
            
                <div data-wow-delay="0.1s" class = "main_table"> 
                    <div id = "main_table">
                    <br/>
                        <table className="table-striped" data-wow-delay="0.2s" id = "customers">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Tiêu đề</th>
                                <th>Thời gian tạo</th>
                                <th>Người tạo</th>
                                <th>Trạng thái</th>
                                <th>Ngày bắt đầu</th>
                                <th>Ngày kết thúc</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Cho thuê phòng trọ</td>
                                <td>25/12/2020</td>
                                <td>mailinh1352000@gmail.com</td>
                                <td>Chưa duyệt</td>
                                <td>26/12/2020</td>
                                <td>26/02/2020</td>
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
            </div>
        );
    }
}
export default ManagePost;
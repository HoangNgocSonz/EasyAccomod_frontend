import React, { Component, useState } from "react";
import { Multiselect } from 'multiselect-react-dropdown';
import './new_news.css'

class NewsHome extends Component{    
    constructor(props){
        super(props);
        this.state = {
            options: [{name: 'Wifi miễn phí', id: 1},{name: 'Có gác lửng', id: 2},{name: 'Tủ + giường', id: 3},{name: 'Không chung chủ', id: 4},
            {name: 'Chung chủ', id: 5}, {name: 'Giờ giấc tự do', id: 6}, {name: 'Vệ sinh riêng', id: 7}, {name: 'Vệ sinh chung', id: 8}],
        }
    }
    render(){
        return(
            <div className="container-fluid newshome">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12 tieudepage_mg">
                        <h2 className="tieudepage_mg-h2">Đăng tin phòng trọ</h2>
                        <p>Thông tin càng chính xác giúp cho người thuê một cách tốt nhất</p>
                    </div>
                </div>
                <div className="ggmappage wow fadeInUp main_news" data-wow-delay="0.1s">
                    <div className="row">
		                <div className="col-md-8">
                            <div className="panel panel-default">
                                <div id ="panel-heading">Thông tin bắt buộc*</div>	
                                <div className = "panel-body">               
                                    <input type="hidden" name="_token"/>
                                    <div className="form-group">
                                        <label for="head">Tiêu đề bài đăng:</label>
                                        <input type="text" className="form-control" name="txttitle" id = "head"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="city">Tỉnh/ Thành phố:</label>
                                                <select className="form-control nice-select wide select_item" name="Haha" id = "city">
                                                <option value='0' name="0">-- Chọn Tỉnh/Thành Phố --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="add">Quận/ Huyện:</label>
                                                <select className="form-control nice-select wide select_item" id = "add">
                                                    <option value='0'>-- Chọn Quận/Huyện --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="name">Tên đường</label>
                                                <select className="form-control nice-select wide select_item" id = "name">
                                                    <option value='0'>-- Chọn Tên Đường --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="items">Danh mục:</label>
                                                <select className="form-control nice-select wide select_item" id = "items">
                                                    <option value="1">Thuê phòng trọ</option>
                                                    <option value="2">Thuê nhà nguyên căn</option>
                                                    <option value="3">Thuê căn hộ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label for ="address">Địa chỉ phòng trọ:</label> Bạn có thể nhập hoặc chọn ví trí trên bản đồ 
                                        <input type="text" id="location-text-box" name="txtaddress" className="form-control" value="" id = "address" />
                                        <input type="hidden" id="txtaddress" name="txtaddress" value=""  className="form-control"  />
                                        <input type="hidden" id="txtlat" value="" name="txtlat"  className="form-control"  />
                                        <input type="hidden" id="txtlng"  value="" name="txtlng" className="form-control" />
                                    </div>
                                    <div className="row content_news">
                                        <div className="col-md-8 col-sm-8 col-xs-12 content_news">
                                            
                                            <textarea 
                                            ref="content_infor"
                                            placeholder="Mô tả thông tin nhà trọ"/>
                                        </div>
                                        <div className="col-md-4 col-sm-4 col-xs-12 content-warning">
                                            <div className="alert alert-warning" role="alert" >
                                                <div className="row titel-warning">
                                                    <h4>Lưu ý khi đăng tin</h4>
                                                </div>
                                                <div className="row body-warning">
                                                    <ul>
                                                        <li>Nội dung phải viết bằng tiếng Việt có dấu</li>
                                                        <li>Tiêu đề tin không dài quá 100 kí tự</li>
                                                        <li>Các bạn nên điền đầy đủ thông tin vào các mục để tin đăng có hiệu quả hơn.</li>
                                                        <li> Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy sửa vị trí tin rao của bạn trên bản đồ bằng cách kéo icon tới đúng vị trí của tin rao.</li>
                                                        <li>Tin đăng có hình ảnh rõ ràng sẽ được xem và gọi gấp nhiều lần so với tin rao không có ảnh. Hãy đăng ảnh để được giao dịch nhanh chóng!</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="cost">Giá phòng( vnđ ):</label>
                                                <input type="number" name="txtprice" className="form-control" placeholder="750000" id = "cost"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="s">Diện tích( m<sup>2</sup> ):</label>
                                                <input type="number" name="txtarea" className="form-control" placeholder="16" id = "s"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                            <label for="usr">SĐT Liên hệ:</label>
                                            <input type="text" name="txtphone" className="form-control" placeholder="0915111234" id = "usr"></input>
                                            </div>
                                        </div>
                                    </div> 
                                    <form>
                                        <div className="form-group">
                                            <label for = "dropdown-test">Các tiện ích có trong phòng trọ:</label>
                                            <Multiselect
                                                options={this.state.options}
                                                displayValue="name"
                                                showCheckbox={true}
                                                closeIcon = "cancel"
                                                placeholder = "Lựa chọn tiện ích"
                                            />
                                        </div>
                                    </form>
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleFormControlFile1">Thêm ảnh minh họa</label>
                                            <input type="file" class="form-control-file" id="exampleFormControlFile1" multiple/>
                                        </div>
                                    </form>
                                    <button class="btn_PostNews">Đăng Tin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default NewsHome;
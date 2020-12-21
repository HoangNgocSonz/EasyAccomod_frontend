import React, { Component } from "react";
import './new_news.css'

class NewsHome extends Component{
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
                                        <label for="usr">Tiêu đề bài đăng:</label>
                                        <input type="text" className="form-control" name="txttitle"/>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="usr">Tỉnh/ Thành phố:</label>
                                                <select className="form-control nice-select wide select_item" name="Haha">
                                                <option value='0' name="0">-- Chọn Tỉnh/Thành Phố --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="usr">Quận/ Huyện:</label>
                                                <select className="form-control nice-select wide select_item">
                                                    <option value='0'>-- Chọn Quận/Huyện --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="usr">Tên đường</label>
                                                <select className="form-control nice-select wide select_item">
                                                    <option value='0'>-- Chọn Tên Đường --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-3 col-xs-12">
                                            <div className="form-group">
                                                <label for="usr">Danh mục:</label>
                                                <select className="form-control nice-select wide select_item">
                                                    <option value="1">Thuê phòng trọ</option>
                                                    <option value="2">Thuê nhà nguyên căn</option>
                                                    <option value="3">Thuê căn hộ</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/*<div className="col-md-4 col-sm-4 col-xs-12">
                                            <div className="col-md-10 col-sm-10 col-xs-12">
                                            <select className="form-control nice-select wide select_item">
                                                    <option value="1">Thuê phòng trọ</option>
                                                    <option value="2">Thuê nhà nguyên căn</option>
                                                    <option value="3">Thuê căn hộ</option>
                                                </select>
                                            </div>
                                        </div>*/}
                                    </div>
                                    <div className="form-group">
                                        <label>Địa chỉ phòng trọ:</label> Bạn có thể nhập hoặc chọn ví trí trên bản đồ 
                                        <input type="text" id="location-text-box" name="txtaddress" className="form-control" value="" />
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
                                                <label for="usr">Giá phòng( vnđ ):</label>
                                                <input type="number" name="txtprice" className="form-control" placeholder="750000"/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label for="usr">Diện tích( m<sup>2</sup> ):</label>
                                                <input type="number" name="txtarea" className="form-control" placeholder="16"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="form-group">
                                            <label for="usr">SĐT Liên hệ:</label>
                                            <input type="text" name="txtphone" className="form-control" placeholder="0915111234"></input>
                                            </div>
                                        </div>
                                    </div> 
                                    <div className="form-group">
                                        <label>Các tiện ích có trong phòng trọ:</label>
                                        <select id="select-state" name="tienich[]" multiple className="demo-default selectized" placeholder="Chọn các tiện ích phòng trọ">
                                            <option value="Wifi miễn phí">Wifi miễn phí</option>
                                            <option value="Có gác lửng">Có gác lửng</option>
                                            <option value="Tủ + giường">Tủ + giường</option>
                                            <option value="Không chung chủ">Không chung chủ</option>
                                            <option value="Chung chủ" >Chung chủ</option>
                                            <option value="Giờ giấc tự do">Giờ giấc tự do</option>
                                            <option value="Vệ sinh riêng">Vệ sinh riêng</option>
                                            <option value="Vệ sinh chung">Vệ sinh chung</option>
                                        </select>
                                    </div>
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
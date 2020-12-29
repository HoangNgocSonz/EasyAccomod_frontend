import React, { Component } from "react";
import "./footer.css";
import img_envelope from "./image_footer/envelope.png";
import img_location from "./image_footer/location.png";
import img_phone_call from "./image_footer/phone-call.png";

class Footer extends Component {
  render() {
    return(
      <div>
          <footer class="site-footer">
            <div class="container">
              <div class="row">
                <div class="col-sm-12 col-md-6">
                  <h6>About</h6>
                  <p class="text-justify">Nhu cầu tìm phòng trọ sinh viên, phòng trọ Hà Nội ở ghép luôn quá tải, đặc biệt là ở những thành phố lớn, nơi có nhiều khu công nghiệp, trường đại học. Phần lớn nhu cầu tìm thuê phòng trọ Hà Nội đến từ sinh viên tỉnh lên thành phố học tập và làm việc. Nhất là vào dịp tuyển sinh ở các trường Đại học thì tình trạng "khóc ròng" khi phải đi tìm phòng trọ ở Hà Nội ngày càng diễn ra phổ biến hơn. Lượng nhà trọ ở Hà Nội hạn chế, cộng thêm chất lượng ngày càng đi xuống, khiến cho nhiều người phải ngán ngẫm.

Để giải quyết được vấn đề đó, bạn có thể truy cập vào EasyAccomod để tìm phòng trọ Hà Nội giá rẻ, phù hợp với túi tiền, số lượng người sinh hoạt và ưu tiên gần địa điểm trường Đại học, chợ, siêu thị, bệnh viện,....</p>
                </div>

                <div class="col-xs-6 col-md-3">
                  <h6>Categories</h6>
                  <ul class="footer-links">
                    <li>Javascript, HTML, CSS</li>
                    <li>UI Design: Bootstrap,...</li>
                    <li>Nodejs</li>
                    <li>Reactjs</li>
                  </ul>
                </div>

                <div class="col-xs-6 col-md-3">
                  <h6>Giờ làm việc</h6>
                  <ul class="footer-links">
                    <li>Thứ 2 - Thứ 6: 09 AM - 19 PM</li>
                    <li>Thứ 7: 09 AM - 12 AM</li>
                    <li>Chủ nhật: 09 AM - 19 PM</li>
                  </ul>
                </div>
              </div>
              <hr/>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-md-8 col-sm-6 col-xs-12">
                  <p class="copyright-text"> EASY ACCOMOD
                  </p>
                </div>

                <div class="col-md-4 col-sm-6 col-xs-12">
                  <ul class="social-icons">
                    <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                    <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                  </ul>
                </div>
              </div>
            </div>
          </footer>
      </div>
    )
  }
}
export default Footer;

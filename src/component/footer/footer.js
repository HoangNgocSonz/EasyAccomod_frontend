import React, { Component } from "react";
import "./footer.css";
import img_envelope from "./image_footer/envelope.png";
import img_location from "./image_footer/location.png";
import img_phone_call from "./image_footer/phone-call.png";

class Footer extends Component {
  render() {
    return (
      <div class="footer" id = "footer" data-wow-delay="0.2s">
        <h3>WEBSITE TÌM PHÒNG TRỌ</h3>
        <div class="left">
          <h3>EasyAccomod</h3>
          <p className="p_tag">Website Đăng tin và Tìm kiếm Phòng trọ</p>
          <p className="p_tag">Sinh viên thực hiện: Phạm Mai Linh</p>
        </div>
        <div class="center">
          <h3>Thông tin liên hệ</h3>
          <div>
            <h6>
              <img src={img_phone_call} alt="cty" />
              <span> (+84 - 028) 38964922</span>
            </h6>
          </div>
          <div>
            <h6>
              <img src={img_envelope} alt="cty" />
              <span>dhcn@uet.vnu.edu.vn</span>{" "}
            </h6>
          </div>
          <div>
            <h6>
              <img src={img_location} alt="cty" />{" "}
              <span>Xuân Thủy, Cầu Giấy, Hà Nội</span>
            </h6>
          </div>
        </div>
        <div class="right">
          <h3>Giờ làm việc</h3>
          <p className="p_tag">Thứ 2 - Thứ 6: 09 AM - 19 PM</p>
          <p className="p_tag">Thứ 7: 09 AM - 12 AM</p>
          <p className="p_tag">Chủ nhật: 09 AM - 19 PM</p>
        </div>
        <div class="footer-bottom"></div>
      </div>
    );
  }
}
export default Footer;

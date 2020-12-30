import React, { Component } from "react";
import axios from "axios";
import "./filter.css";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "@material-ui/core/Slider";
class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listHN: [
        "Ba Đình",
        "Bắc Từ Liêm",
        "Cầu Giấy",
        "Đống Đa",
        "Hà Đông",
        "Hai Bà Trưng",
        "Hoàn Kiếm",
        "Hoàng Mai",
        "Long Biên",
        "Nam Từ Liêm",
        "Tây Hồ",
        "Thanh Xuân",
        "TX.Sơn Tây",
        "Ba Vì",
        "Chương Mỹ",
        "Đan Phượng",
        "Đông Anh",
        "Gia Lâm",
        "Hoài Đức",
        "Mê Linh",
        "Mỹ Đức",
        "Phú Xuyên",
        "Phúc Thọ",
        "Quốc Oai",
        "Sóc Sơn",
        "Thạch Thất",
        "Thanh Oai",
        "Thanh Trì",
        "Thường Tín",
        "Ứng Hòa",
      ],
    };
  }
  abc() {
    this.props.setKindOfMoterFilter(
      document.getElementById("select_itemx").value,
      document.getElementById("cityFilter1").value
    );
  }
  setQuanHuyen() {
    if (document.getElementById("cityFilter1").value == "Hà Nội") {
      this.setState({
        listHN: [
          "Ba Đình",
          "Bắc Từ Liêm",
          "Cầu Giấy",
          "Đống Đa",
          "Hà Đông",
          "Hai Bà Trưng",
          "Hoàn Kiếm",
          "Hoàng Mai",
          "Long Biên",
          "Nam Từ Liêm",
          "Tây Hồ",
          "Thanh Xuân",
          "TX.Sơn Tây",
          "Ba Vì",
          "Chương Mỹ",
          "Đan Phượng",
          "Đông Anh",
          "Gia Lâm",
          "Hoài Đức",
          "Mê Linh",
          "Mỹ Đức",
          "Phú Xuyên",
          "Phúc Thọ",
          "Quốc Oai",
          "Sóc Sơn",
          "Thạch Thất",
          "Thanh Oai",
          "Thanh Trì",
          "Thường Tín",
          "Ứng Hòa",
        ],
      });
    } else {
      this.setState({
        listHN: [
          "Quận 1",
          "Quận 2",
          "Quận 3",
          "QUận 4",
          "Quận 5",
          "Quận 6",
          "Quận 7",
          "Quận 8",
          "Quận 9",
          "Quận 10",
          "Quận 11",
          "Quận 12",
          "Quận Bình Tân",
          "Quận Bình Thạnh",
          "Quận Gò Vấp",
          "Quận Phú Nhuận",
          "Quận Tân Bình",
          "Quận Tân Phú",
          "Quận Thủ Đức",
          "Huyện Bình Chánh",
          "Huyện Cần Giờ",
          "Huyện Củ Chi",
          "Huyện Hóc Môn",
          "Huyện Nhà Bè",
        ],
      });
    }
  }

  render() {
    // function list(props) {
    //   const listCity=['Hà Nội','TP.Hồ Chí Minh'];
    //  const listHN=['Ba Đình','Bắc Từ Liêm','Cầu Giấy','Đống Đa','Hà Đông','Hai Bà Trưng','Hoàn Kiếm','Hoàng Mai','Long Biên','Nam Từ Liêm','Tây Hồ','Thanh Xuân','TX.Sơn Tây','Ba Vì','Chương Mỹ','Đan Phượng','Đông Anh','Gia Lâm','Hoài Đức','Mê Linh','Mỹ Đức','Phú Xuyên','Phúc Thọ','Quốc Oai','Sóc Sơn','Thạch Thất','Thanh Oai','Thanh Trì','Thường Tín','Ứng Hòa',];
    //   const listHCM=['Quận 1', 'Quận 2', 'Quận 3', 'QUận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8','Quận 9','Quận 10', 'Quận 11', 'Quận 12', 'Quận Bình Tân','Quận Bình Thạnh','Quận Gò Vấp','Quận Phú Nhuận', 'Quận Tân Bình','Quận Tân Phú','Quận Thủ Đức','Huyện Bình Chánh','Huyện Cần Giờ','Huyện Củ Chi','Huyện Hóc Môn','Huyện Nhà Bè',];
    // }
    var items = this.state.listHN.map((item) => <option>{item}</option>);
    return (
      <div className="filter-top">
        <Container>
          <Row>
            <Col xs={4} md={2}>
              <select
                className="form-control nice-select wide select_item"
                id="select_itemx"
              >
                <option data-display="Thể loại" value="0">
                  Tất cả
                </option>
                <option>Nhà trọ</option>
                <option>Căn hộ</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select
                className="form-control nice-select wide select_item"
                name="Haha"
                onChange={this.setQuanHuyen.bind(this)}
                id="cityFilter1"
              >
                <option>Tỉnh/Thành phố</option>
                <option>Hà Nội</option>
                <option>Hồ Chí Minh</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select className="form-control nice-select wide select_item">
                <option>Quận/Huyện</option>
                {items}
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select className="form-control nice-select wide select_item">
                <option data-display="Mức giá" value="0">
                  Mức giá
                </option>
                <option value="1">Dưới 1 triệu</option>
                <option value="2">1 - 2 triệu</option>
                <option value="3">2 - 3 triệu</option>
                <option value="4">3 - 5 triệu</option>
                <option value="5">5 - 7 triệu</option>
                <option value="6">7 - 10 triệu</option>
                <option value="7">10 - 20 triệu</option>
                <option value="8">20 - 50 triệu</option>
                <option value="8">50 - 100 triệu</option>
                <option value="8">Trên 100 triệu</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select
                className="form-control nice-select wide select_item"
                id="acreage"
              >
                <option data-display="Diện tích" value="0">
                  Diện tích
                </option>
                <option value="1">0 - 15 m2</option>
                <option value="2">15 - 20 m2</option>
                <option value="3">20- 25 m2</option>
                <option value="4">25 - 30 m2</option>
                <option value="5">30 - 50 m2</option>
                <option value="8">50 - 60 m2</option>
                <option value="9">60 - 80 m2</option>
                <option value="10">80 - 100 m2</option>
                <option value="11">Trên 100 m2</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <div className="searchright" onClick={this.abc.bind(this)}>
                <input className="bnt_find" type="button" value="Tìm Kiếm" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <hr></hr>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Filter;

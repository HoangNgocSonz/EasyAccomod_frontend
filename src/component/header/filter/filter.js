import React, { Component } from "react";
import axios from "axios";
import "./filter.css";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "@material-ui/core/Slider";
class Filter extends Component {
  render() {
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
                <option value="1">Thuê Phòng Trọ</option>
                <option value="3">Thuê Căn Hộ</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select
                className="form-control nice-select wide select_item"
                name="Haha"
              >
                <option value="0">Tỉnh/Thành Phố</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select className="form-control nice-select wide select_item">
                <option value="0">Chọn Quận/Huyện</option>{" "}
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
                <option value="5">30 - 35 m2</option>
                <option value="6">35 - 40 m2</option>
                <option value="7">40 - 50 m2</option>
                <option value="8">50 - 60 m2</option>
                <option value="9">60 - 80 m2</option>
                <option value="10">80 - 100 m2</option>
                <option value="11">Trên 100 m2</option>
              </select>
            </Col>
            <Col xs={4} md={2}>
              <div className="searchright">
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

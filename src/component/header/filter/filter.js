import React, { Component } from "react";
import axios from "axios";
import "./filter.css";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "@material-ui/core/Slider";
class Filter extends Component {
  abc() {
    this.props.setKindOfMoterFilter(
      document.getElementById("select_itemx").value
    );
  }

  //   constructor(props) {
  //     super(props);
  //     this.state={

  //        cities: [
  //          {id: 1, city:'Hà Nội'},
  //          {id: 2, city:'TP.Hồ Chí Minh'},
  //        ],

  //         district1:[
  //           {id:1, district:'Ba Đình',id_city: 1},
  //           {id:2, district:'Bắc Từ Liêm',id_city: 1},
  //           {id:3, district:'Cầu Giấy',id_city: 1},
  //           {id:4, district:'Đống Đa',id_city: 1},
  //           {id:5, district:'Hà Đông',id_city: 1},
  //           {id:6, district:'Hai Bà Trưng',id_city: 1},
  //           {id:7, district:'Hoàn Kiếm',id_city: 1},
  //           {id:8, district:'Hoàng Mai',id_city: 1},
  //           {id:9, district:'Long Biên',id_city: 1},
  //           {id:10, district:'Nam Từ Liêm',id_city: 1},
  //           {id:11, district:'Tây Hồ',id_city: 1},
  //           {id:12, district:'Thanh Xuân',id_city: 1},
  //           {id:13, district:'TX.Sơn Tây',id_city: 1},
  //           {id:14, district:'Ba Vì',id_city: 1},
  //           {id:15, district:'Chương Mỹ',id_city: 1},
  //           {id:16, district:'Đan Phượng',id_city: 1},
  //           {id:17, district:'Đông Anh',id_city: 1},
  //           {id:18, district:'Gia Lâm',id_city: 1},
  //           {id:19, district:'Hoài Đức',id_city: 1},
  //           {id:20, district:'Mê Linh',id_city: 1},
  //           {id:21, district:'Mỹ Đức',id_city: 1},
  //           {id:22, district:'Phú Xuyên',id_city: 1},
  //           {id:23, district:'Phúc Thọ',id_city: 1},
  //           {id:24, district:'Quốc Oai',id_city: 1},
  //           {id:25, district:'Sóc Sơn',id_city: 1},
  //           {id:26, district:'Thạch Thất',id_city: 1},
  //           {id:27, district:'Thanh Oai',id_city: 1},
  //           {id:28, district:'Thanh Trì',id_city: 1},
  //           {id:29, district:'Thường Tín',id_city: 1},
  //           {id:30, district:'Ứng Hòa',id_city: 1},
  //         ],
  //         district2:[
  //           {id:31, district:'Quận 1',id_city: 2},
  //           {id:32, district:'Quận 2',id_city: 2},
  //           {id:33, district:'Quận 3',id_city: 2},
  //           {id:34, district:'Quận 4',id_city: 2},
  //           {id:35, district:'Quận 5',id_city: 2},
  //           {id:36, district:'Quận 6',id_city: 2},
  //           {id:37, district:'Quận 7',id_city: 2},
  //           {id:38, district:'Quận 8',id_city: 2},
  //           {id:39, district:'Quận 9',id_city: 2},
  //           {id:40, district:'Quận 10',id_city: 2},
  //           {id:41, district:'Quận 11',id_city: 2},
  //           {id:42, district:'Quận 12',id_city: 2},
  //           {id:43, district:'Quận Bình Tân',id_city: 2},
  //           {id:44, district:'Quận Bình Thạnh',id_city: 2},
  //           {id:45, district:'Quận Gò Vấp',id_city: 2},
  //           {id:46, district:'Quận Phú Nhuận',id_city: 2},
  //           {id:47, district:'Quận Tân Bình',id_city: 2},
  //           {id:48, district:'Quận Tân Phú',id_city: 2},
  //           {id:49, district:'Quận Thủ Đức',id_city: 2},
  //           {id:50, district:'Huyện Bình Chánh',id_city: 2},
  //           {id:51, district:'Huyện Cần Giờ',id_city: 2},
  //           {id:52, district:'Huyện Củ Chi',id_city: 2},
  //           {id:53, district:'Huyện Hóc Môn',id_city: 2},
  //           {id:54, district:'Huyện Nhà Bè',id_city: 2},

  //         ],
  //     }
  // }

  render() {
    // function list(props) {
    //   const listCity=['Hà Nội','TP.Hồ Chí Minh'];
    //  const listHN=['Ba Đình','Bắc Từ Liêm','Cầu Giấy','Đống Đa','Hà Đông','Hai Bà Trưng','Hoàn Kiếm','Hoàng Mai','Long Biên','Nam Từ Liêm','Tây Hồ','Thanh Xuân','TX.Sơn Tây','Ba Vì','Chương Mỹ','Đan Phượng','Đông Anh','Gia Lâm','Hoài Đức','Mê Linh','Mỹ Đức','Phú Xuyên','Phúc Thọ','Quốc Oai','Sóc Sơn','Thạch Thất','Thanh Oai','Thanh Trì','Thường Tín','Ứng Hòa',];
    //   const listHCM=['Quận 1', 'Quận 2', 'Quận 3', 'QUận 4', 'Quận 5', 'Quận 6', 'Quận 7', 'Quận 8','Quận 9','Quận 10', 'Quận 11', 'Quận 12', 'Quận Bình Tân','Quận Bình Thạnh','Quận Gò Vấp','Quận Phú Nhuận', 'Quận Tân Bình','Quận Tân Phú','Quận Thủ Đức','Huyện Bình Chánh','Huyện Cần Giờ','Huyện Củ Chi','Huyện Hóc Môn','Huyện Nhà Bè',];

    // }
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
              >
                <option value="0">Tỉnh/Thành Phố</option>
                {/* {
                                      this.state.cities.map((item,index)=>
                                        <option key={index} value={item.id}>{item.city}</option>)
                 } */}
              </select>
            </Col>
            <Col xs={4} md={2}>
              <select className="form-control nice-select wide select_item">
                <option value="0">Chọn Quận/Huyện</option>
                {/* {
                                      this.state.district1.map((item,index)=>
                                        <option key={index} value={item.id}>{item.district}</option>)
                 }
                  {
                                      this.state.district2.map((item,index)=>
                                        <option key={index} value={item.id}>{item.district}</option>)
                 } */}
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

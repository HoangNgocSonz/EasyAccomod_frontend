import React, { Component } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import Report from "../newHome/report_news/report_news";
import axios from "axios";
import "./RoomDetail.css";
export default class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCarousel: [],
      dataOfRoom: [],
    };
  }
  componentDidMount() {
    axios
      .get(
        `https://accomod.herokuapp.com/api/post/${this.props.match.params._id}`
      )
      .then((res) => {
        this.setState({
          imageCarousel: res.data.data.images.map((data) => (
            <Carousel.Item>
              <img className="imageCorousel" src={data} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          )),
          dataOfRoom: res.data.data,
        });

        console.log(this.state.dataOfRoom);
      })
      .catch((err) => console.log("err: " + err + this.props.match.params._id));
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={9}>
            <div className="Carousel_wrap">
              <Carousel>{this.state.imageCarousel}</Carousel>
            </div>
            <div>
              {this.state.dataOfRoom.length != 0 ? (
                <div>
                  <h4 className="titleDetail">{this.state.dataOfRoom.title}</h4>
                  <hr></hr>
                  <h5 className="costDetail">
                    <span>{this.state.dataOfRoom.cost}</span>
                    <span className="acreageDetail">
                      {this.state.dataOfRoom.acreage}m
                      <span className="twoDetail">2 </span>
                    </span>
                    <span className="quan_huyenDetail">
                      {this.state.dataOfRoom.quan_huyen},
                    </span>
                    <span className="provinceDetail">
                      {this.state.dataOfRoom.province}
                    </span>
                  </h5>
                  <hr></hr>
                  <div>
                    <h5>Thông tin mô tả</h5>
                    <span>{this.state.dataOfRoom.description}</span>
                    <h5 className="real_estate_characteristics">
                      Đặc điểm bất động sản
                    </h5>
                    <div className="detailInfo">
                      <p className="detailInformation">
                        <span className="bold">Loại tin đăng: </span> cho thuê{" "}
                        {this.state.dataOfRoom.kindOfRoom}
                      </p>
                      <p className="detailInformation">
                        <span className="bold">Địa chỉ: </span>
                        {this.state.dataOfRoom.addressDetail},{" "}
                        {this.state.dataOfRoom.quan_huyen},{" "}
                        {this.state.dataOfRoom.province}{" "}
                      </p>
                      <p className="detailInformation">
                        <span className="bold">Số phòng ngủ:</span>{" "}
                        {this.state.dataOfRoom.detailInfor.Bedroom}
                      </p>
                      <p className="detailInformation">
                        <span className="bold">Bình nóng lạnh:</span>{" "}
                        {this.state.dataOfRoom.detailInfor.electric_water_heater
                          ? "có"
                          : "không"}
                      </p>
                      <p className="detailInformation">
                        <span className="bold">Điều hòa:</span>{" "}
                        {this.state.dataOfRoom.detailInfor.air_conditioning
                          ? "có"
                          : "không"}
                      </p>
                      <p className="detailInformation">
                        <span className="bold">Ban công:</span>{" "}
                        {this.state.dataOfRoom.detailInfor.balcony
                          ? "có"
                          : "không"}
                      </p>
                    </div><hr/>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </Col>
          <Col xs={0} sm={0} md={0} lg={0} xl={3}>
            <div className="RoomDetailRight"></div>
          </Col>
        </Row>
      </Container>
    );
  }
}

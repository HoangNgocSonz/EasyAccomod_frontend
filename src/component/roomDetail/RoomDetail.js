import React, { Component } from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";
import Report from "../newHome/report_news/report_news";
import Navbar from "../menu/Navbar";
import axios from "axios";
import "./RoomDetail.css";
import Feedback from "../newHome/feedback/feedback";
import Filter from "../header/filter/filter";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";
import heart from "./image/heart.jpg";

import img_banner from "../header/image_header/banner.png";
export default class RoomDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageCarousel: [],
      dataOfRoom: [],
      author: [],
      email: [],
      motelId: [],
    };
  }
  componentDidMount() {
    axios
      .get(`https://accomod.herokuapp.com/api/user/5fe846051244af0023bb6e02`)
      .then((res2) => {
        this.setState({
          author: (
            <div>
              <center>
                <img className="imgAvatar" src={res2.data.data.avatar}></img>
              </center>
              <center>
                <div>
                  {res2.data.data.gender == "Nam" ? (
                    <div className="userName">Mr {res2.data.data.userName}</div>
                  ) : (
                    "xyz"
                  )}
                </div>
              </center>
              <center>
                <div className="spanPhone">Sđt: {res2.data.data.phone}</div>
              </center>

              <center>
                <div className="copyEmail" onClick={() => this.handleClick()}>
                  Sao chép email
                </div>
              </center>
            </div>
          ),
          email: res2.data.data.email,
        });
      })
      .catch((err) => console.log("err: " + err + this.props.match.params._id));

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
          motelId: res.data.data._id,
        });
      })
      .catch((err) => console.log("err: " + err + this.props.match.params._id));
  }
  handleClick() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }
  addToFavouriteList() {
    console.log("11111");
    // console.log(JSON.parse(localStorage.user)._id);
    axios
      .put(
        `https://accomod.herokuapp.com/api/user/${
          JSON.parse(localStorage.user)._id
        }`,
        {
          favourite: [`${this.state.motelId}`],
        }
      )
      .then((res3) => {
        console.log(res3.data.data);
        axios
          .get("https://accomod.herokuapp.com/api/user", {
            params: {
              email: `${JSON.parse(localStorage.user).email}`,
            },
          })
          .then((resx) => {
            console.log("update local");
            console.log(resx.data.data);
            localStorage.user = JSON.stringify(resx.data.data[0]);
          })
          .catch((err) => console.log("errrrr: " + err));
      })
      .catch((err) => console.log("errrr:" + err));

    //sdfsdfsdsfsdf
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Filter></Filter>
        <div className="roomDetail">
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={9}>
                <div className="Carousel_wrap">
                  <Carousel>{this.state.imageCarousel}</Carousel>
                </div>
                <div>
                  {this.state.dataOfRoom.length != 0 ? (
                    <div>
                      <h4 className="titleDetail">
                        {this.state.dataOfRoom.title}
                      </h4>
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
                        <img
                          src={heart}
                          onClick={this.addToFavouriteList.bind(this)}
                          className="heart"
                        ></img>
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
                            <span className="bold">Loại tin đăng: </span> cho
                            thuê {this.state.dataOfRoom.kindOfRoom}
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
                            {this.state.dataOfRoom.detailInfor
                              .electric_water_heater
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
                        </div>
                        <hr />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  <div>
                    <h6>Bình luận</h6>
                  </div>
                  <div className="d-flex flex-row p-3">
                    <img
                      src="https://i.imgur.com/zQZSWrt.jpg"
                      width="50"
                      className="rounded-circle mr-2"
                    />
                    <textarea
                      type="textarea"
                      placeholder="Bình luận của bạn..."
                      rows="1"
                      className="form-control"
                    ></textarea>
                    <input
                      type="button"
                      className="btn btn-default btn1"
                      value="Đăng"
                    />
                  </div>

                  <div className="d-flex flex-row p-3">
                    {" "}
                    <img
                      src="https://i.imgur.com/zQZSWrt.jpg"
                      width="40"
                      height="40"
                      className="rounded-circle mr-3"
                    />
                    <div className="w-80">
                      <div className="d-flex">
                        <div className="d-flex">
                          {" "}
                          <span className="mr-2">Nguyễn Thắm</span>
                        </div>
                      </div>
                      <p className=" comment-text ">
                        Phòng đẹp, đầy đủ tiện nghi giống với mô tả, chủ nhà
                        thân thiện.Phòng đẹp , đầy đủ tiện nghi giống với mô tả,
                        chủ nhà thân thiện.Phòng đẹp, đầy đủ tiện nghi giống với
                        mô tả, chủ nhà thân thiện. hòng đẹp, đầy đủ tiện nghi
                        giống với mô tả, chủ nhà thân thiện.Phòng đẹp , đầy đủ
                        tiện nghi giống với mô tả, chủ nhà thân thiện.Phòng đẹp,
                        đầy đủ tiện nghi giống với mô tả, chủ nhà thân thiện
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-row p-3">
                    {" "}
                    <img
                      src="https://i.imgur.com/zQZSWrt.jpg"
                      width="40"
                      height="40"
                      className="rounded-circle mr-3"
                    />
                    <div className="w-80">
                      <div className="d-flex">
                        <div className="d-flex">
                          {" "}
                          <span className="mr-2">Nguyễn Thắm</span>
                        </div>
                      </div>
                      <p className="comment-text ">
                        Phòng đẹp, đầy đủ tiện nghi giống với mô tả, chủ nhà
                        thân thiện.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex flex-row p-3">
                    {" "}
                    <img
                       src=""
                      width="40"
                      height="40"
                      className="rounded-circle mr-3"
                      alt="avatar"
                    />
                    <div className="w-80">
                      <div className="d-flex">
                        <div className="d-flex">
                          {" "}
                          <span className="mr-2">Tên tài khoản</span>
                        </div>
                      </div>
                      <p className=" comment-text ">Comment</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={0} sm={0} md={0} lg={0} xl={3}>
                <div className="authorInfor">
                  {this.state.author.length != 0 ? (
                    <div>{this.state.author}</div>
                  ) : (
                    ""
                  )}
                </div>

                <Feedback></Feedback>
                <div class="reportnews">
                  <Report />
                </div>

                {this.state.email.length != 0 ? (
                  <input
                    type="text"
                    value={this.state.email}
                    id="myInput"
                  ></input>
                ) : (
                  ""
                )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

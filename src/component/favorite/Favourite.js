import React, { Component } from "react";
import "./Favourite.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../menu/Navbar";
import Filter from "../header/filter/filter";
export default class Favourite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      motel: [],
    };
  }
  componentDidMount() {
    var idList = [];
    if (localStorage.user) {
      idList = JSON.parse(localStorage.user).favourite;
    }
    // var idList = JSON.parse(localStorage.user).favourite;
    var favouriteList = [];
    console.log(idList);
    for (var i = 0; i < idList.length; i++) {
      axios
        .get(`https://accomod.herokuapp.com/api/post/${idList[i]}`)
        .then((res) => {
          favouriteList.push(res.data.data);
          this.setState({
            motel: favouriteList,
          });
        })
        .catch((err) => console.log("err: " + err));
    }
    console.log(this.state.motel);
  }
  render() {
    var contentArr = this.state.motel.map((content) => (
      <div>
        {content ? (
          <Link to={`/detail/${content._id}`}>
            <div className="content">
              <Row>
                <Col xs={6} sm={5} md={4} lg={3}>
                  <img className="image" src={content.images[0]}></img>
                </Col>
                <Col xs={6} sm={7} md={8} lg={9}>
                  <div className="detail">
                    <div className="limitHeight">
                      <h4 className="titleRommList">{content.title}</h4>
                      <h5 className="cost">
                        <span>{content.cost}</span>
                        <span className="acreage">
                          {content.acreage}m<span className="two">2 </span>
                        </span>
                        <span className="quan_huyen">
                          {content.quan_huyen},
                        </span>
                        <span className="province">{content.province}</span>
                      </h5>
                      <div className="description">{content.description}</div>
                    </div>
                    <div className="date">Hôm nay</div>
                  </div>
                </Col>
              </Row>
            </div>
          </Link>
        ) : (
          ""
        )}
      </div>
    ));
    return (
      <div>
        <Navbar></Navbar>
        <Filter></Filter>
        <Container>
          <h4 className="favouriteTitle">Danh sách yêu thích</h4>
          <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={9}>
              <div className="mainLeft">{contentArr}</div>
            </Col>
            <Col xs={0} sm={0} md={0} lg={0} xl={3}>
              <div className="filterRight">
                <div className="filterCost">
                  <h4 className="filterCostTitle">Lọc theo khoảng giá</h4>
                  <hr width="80%"></hr>
                  <p className="selectCost">0 - 1 triệu</p>
                  <p className="selectCost">1 - 2 triệu</p>
                  <p className="selectCost">2 - 3 triệu</p>
                  <p className="selectCost">3 - 5 triệu</p>
                  <p className="selectCost">5 - 7 triệu</p>
                  <p className="selectCost">7 - 10 triệu</p>
                  <p className="selectCost">10 - 20 triệu</p>
                  <p className="selectCost">20 - 50 triệu</p>
                  <p className="selectCost">50 - 100 triệu</p>
                  <p className="selectCost">trên 100 triệu</p>
                </div>
                <div className="filterAceage">
                  <h4 className="filterCostTitle">Lọc theo diện tích</h4>
                  <hr width="80%"></hr>
                  <p className="selectCost">0 - 15 m2</p>
                  <p className="selectCost">15 - 20 m2 triệu</p>
                  <p className="selectCost">20 - 25 m2 triệu</p>
                  <p className="selectCost">25 - 30 m2 triệu</p>
                  <p className="selectCost">30 - 35 m2 triệu</p>
                  <p className="selectCost">35 - 40 m2 triệu</p>
                  <p className="selectCost">40 - 50 m2 triệu</p>
                  <p className="selectCost">50 - 60 m2 triệu</p>
                  <p className="selectCost">60 - 80 m2 triệu</p>
                  <p className="selectCost">80 - 100 m2 triệu</p>
                  <p className="selectCost">trên 100 m2</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

import React, { Component } from "react";
import "./RoomList.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
export default class RoomList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://accomod.herokuapp.com/api/post")
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          contents: res.data.data,
        });
      })
      .catch((err) => console.log("err: " + err));
  }
  render() {
    var contentArr = this.state.contents.map((content) => (
      <div>
        <div className="content">
          <Row>
            <Col sm={3}>
              <img className="image" src={content.images[0]}></img>
            </Col>
            <Col sm={9}>
              <div className="detail">
                <div className="limitHeight">
                  <h4 className="title">{content.title}</h4>
                  <h5 className="cost">
                    <span>{content.cost}</span>
                    <span className="acreage">
                      {content.acreage}m<span className="two">2</span>
                    </span>
                    <span className="quan_huyen">{content.quan_huyen},</span>
                    <span className="province">{content.province}</span>
                  </h5>
                  <div className="description">{content.description}</div>
                </div>

                <div className="date">Hôm nay</div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    ));
    return (
      <div>
        <Row>
          <Col xl={1}></Col>
          <Col xs={12} sm={12} md={12} lg={9} xl={8}>
            {contentArr}
          </Col>
          <Col xs={0} sm={0} md={0} lg={3} xl={2}>
            <div className="filter">
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
          <Col xl={1}></Col>
        </Row>
      </div>
    );
  }
}

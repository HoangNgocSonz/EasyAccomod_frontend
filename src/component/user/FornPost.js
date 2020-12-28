import axios from "axios";
import React, { Component } from "react";

export default class FormPost extends Component {
  postUser() {
    axios
      .post("https://accomod.herokuapp.com/api/user", {
        userName: "sonnkkkk",
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log("err: " + err));
  }
  render() {
    return (
      <div>
        dfdfad
        <input id="userName"></input>
        <input id="image" type="file" id="myFile" name="filename"></input>
        <input type="submit" onClick={this.postUser}></input>
      </div>
    );
  }
}

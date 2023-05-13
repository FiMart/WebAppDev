import "../App.css";
import React from "react";
import Buttonvote from "./Buttonvote";

class Foodbox extends React.Component {
  constructor() {
    super();
    this.state = { countvote: 0 };
  }
  callbackvote = () => {
    if (this.state.countvote < 10) {
      this.setState({ countvote: this.state.countvote + 1 });
    } else {
      alert("Cannot Vote more");
    }
  };
  callbackunvote = () => {
    if (this.state.countvote > 0) {
      this.setState({ countvote: this.state.countvote - 1 });
    } else {
      alert("Cannot unvote");
    }
  };
  resultvoteshow = () => {
    if (this.state.countvote === 0) {
      return "MIN";
    }
    if (this.state.countvote === 10) {
      return "MAX";
    } else {
      return this.state.countvote;
    }
  };
  render() {
    return (
      <section className="box">
        <div className="box-body">
          <div className="box-content">
            <h2>{this.props.header}</h2>
            <h3>{this.props.subheader}</h3>
            <p>{this.props.detail}</p>
          </div>
          <div className="box-image">
            <img alt={this.props.imgalt} src={this.props.imgsrc}></img>
          </div>
        </div>
        <div className="box-footer">
          <Buttonvote
            content="Click to Vote"
            parentcallback={this.callbackvote}
          ></Buttonvote>
          <div className="vote-result">{this.resultvoteshow()}</div>
          <Buttonvote
            content="Click to Unvote"
            parentcallback={this.callbackunvote}
          />
        </div>
      </section>
    );
  }
}

export default Foodbox;

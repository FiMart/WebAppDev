import "../App.css";
import React from "react";

class Buttonvote extends React.Component {
  onTrigger = () => {
    this.props.parentcallback();
  };
  render() {
    return (
      <button className="vote-button" onClick={this.onTrigger}>
        {this.props.content}
      </button>
    );
  }
}

export default Buttonvote;

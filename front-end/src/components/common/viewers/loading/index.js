import React from "react";
import Icon from "./oval.svg";

class Loading extends React.Component {
  
  render() {
    let {className} = this.props
    className = className || '';
    return (
      <img width={30} className={className} src={Icon}/>
    );
  }
}

export default Loading;

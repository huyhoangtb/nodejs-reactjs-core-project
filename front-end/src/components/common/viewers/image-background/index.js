import React from "react";
import "./stylesheet.css";

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 20/05/2017
 **/
class VideoBackGround extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {width, height, src, className, children, bgClassName} = this.props;
    return (
      <div className="ui-image-background" style={{width: `${width}px`, height: `${height}px`}}>
        <div className={`image-panel ${bgClassName}`}>
          {src && <img src={src} className="fullscreen" title="bg"/>}
        </div>
        <div className={`text-panel ${className}`} style={{width: `${width}px`, height: `${height}px`}}>
          {children}
        </div>
      </div>
    );
  }
}

export default VideoBackGround;

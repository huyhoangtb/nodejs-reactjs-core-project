import React from "react";
import MarketDefaultLayout from './index';

class OauthLayout extends React.Component {
  updateWindowDimensions = () => {
    const screenSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.setState({screenSize})
  }
  
  constructor(props) {
    super(props);
    this.state = {
      screenSize: {
        width: window.innerWidth,
        height: window.innerHeight,
      }
    }
  }
  
  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  
  render() {
    const {screenSize} = this.state;
    return (
      <MarketDefaultLayout>
        <div style={{minHeight: `${screenSize.height - 52}px`}} className="center-m-block">
          {this.props.children}
        </div>
      </MarketDefaultLayout>
    );
  }
}

export default OauthLayout;

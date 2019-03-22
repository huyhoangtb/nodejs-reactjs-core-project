import React from "react";
import {Layout} from 'antd';
import TopHeader from './top-header';
import './stylesheet.css';
import './styles/fonts.css';


class MarketLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  
  render() {
    return (
      <Layout className="ui-market-layout">
        <TopHeader/>
        <Layout>
          {this.props.children}
        </Layout>
        {/*<Footer>Footer</Footer>*/}
      </Layout>
    );
  }
}

export default MarketLayout;

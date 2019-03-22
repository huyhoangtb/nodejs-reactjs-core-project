import React from "react";
import {Link} from 'react-router-dom';
import Layout from 'antd/lib/layout';
import Menu from 'layouts/common/menu';
import Icon from 'antd/lib/icon';
import './stylesheet.css';
import menuSchema from "./menu-schema";

const {Header} = Layout;

class TopHeader extends React.Component {
  state = {
    current: 'mail',
  }
  
  render() {
    return (
      <Header className="ui-custom-top-menu ui-top-menu">
        <div className="ui-top-menu-panel">
          <Link to='/' className="logo-panel">
            <Icon type="calendar" className="p-r-10" style={{fontSize: '20px'}}/>
            <span className="logo-text">events</span>
            <span>.com</span>
          </Link>
          <div className="ui-right-menu">adfads
            <Menu
              className="ui-admin-left-menu"
              mode="horizontal"
              schema={menuSchema}/>
          </div>
        </div>
      </Header>
    );
  }
}

export default TopHeader;

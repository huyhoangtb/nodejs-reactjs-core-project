import React from 'react';
import {history} from "store/index";
import Icon from 'antd/lib/icon'
import Menu from "antd/lib/menu";
import './stylesheet.css';

const {SubMenu, Item} = Menu;

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 **/
class MenuRender extends React.Component {
  onMenuClick = (e) => {
    console.log(e);
    if (e && e.key) {
      history.push(e.key);
    }
  }
  getTitleFromItem = (item, index) => {
    
    
    const result = [];
    if (item.icon && item.icon.position === 'left') {
      const className = item.title ? '' : 'm-r-0-i';
      result.push(<Icon key={`${index}_left`} className={className} type={item.icon.type}/>);
    }
    result.push(<span key={`${index}_midle`}> {item.title} </span>);
    
    if (item.icon && item.icon.position === 'right') {
      const className = item.title ? '' : 'm-l-0-i';
      result.push(<Icon key={`${index}_right`} className={className} type={item.icon.type}/>);
    }
    
    return result;
  }
  generateMenu = (schema) => {
    const menus = [];
    schema.map((item, index) => {
      // const key = item.id || item.key || item.url;
      const className = item.className ? item.className : '';
      const key = item.url;
      if (!item.subMenu) {
        return menus.push(<Item className={className} key={key}>
          {this.getTitleFromItem(item)}
        </Item>);
      }
      
      menus.push(
        <SubMenu className={className} key={key} title={this.getTitleFromItem(item, index)}>
          {this.generateMenu(item.subMenu)}
        </SubMenu>
      );
    });
    return menus;
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const className = this.props.className || '';
    const style = this.props.style || {};
    const onClick = this.props.onClick || (() => {
    });
    const {theme, mode, defaultSelectedKeys, schema} = this.props;
    return (
      
      <Menu
        className={`${className} ui-menu-panel`}
        style={style}
        theme={theme}
        mode={mode}
        onClick={(e) => {
          onClick(e);
          this.onMenuClick(e);
        }}
        defaultSelectedKeys={defaultSelectedKeys}>
        {this.generateMenu(schema)}
      </Menu>
    
    );
  }
}

export default MenuRender;

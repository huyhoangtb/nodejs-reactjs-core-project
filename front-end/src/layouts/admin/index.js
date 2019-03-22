import React from "react";
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Breadcrumb from 'antd/lib/breadcrumb';
import {connect} from 'react-redux';
import layoutContextAction from 'action-creators/layout-context';
// import LoginedUser from 'components/common/viewers/login-user';
import AdminTopMenu from './top-menu';
import AdminLeftMenu from './menu-left';
import AdminSubMenuLeft from './sub-menu-left';
import './stylesheet.css'

const {Header, Content, Footer, Sider} = Layout;

class AdminLayout extends React.Component {
  
  switchStateOfLeftMenu = () => {
    const {layoutContext, dispatch} = this.props;
    dispatch(layoutContextAction.setStateOfLeftMenu(!layoutContext.isOpenLeftMenu))
  }
  
  constructor(props) {
    super(props);
  }
  
  render() {
    const {layoutContext} = this.props;
    return (
      <Layout className="ui-admin-layout">
        <AdminTopMenu/>
        <Layout>
          <AdminLeftMenu/>
          <Layout>
            {/*<AdminTopMenu/>*/}
            <Header className="content-header">
              <div className="header-left">
                <div className="flex-center header-collapsed-icon" onClick={this.switchStateOfLeftMenu}>
                  <Icon
                    className="trigger"
                    type={layoutContext.isOpenLeftMenu ? 'menu-fold' : 'menu-unfold'}
                    onClick={this.toggle}
                  />
                </div>
                
                <Breadcrumb>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className="header-right">
                {/*<LoginedUser/>*/}
              </div>
            </Header>
            
            <Content className="content-box">
              <div className="ui-main-content-panel">
                <div className="ui-sub-menu ">
                  <AdminSubMenuLeft/>
                </div>
                <div className="content-box-panel">
                  {this.props.children}
                </div>
              </div>
            
            </Content>
          </Layout>
        
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    layoutContext: state.layoutContext
  }
}


export default connect(mapStateToProps)(AdminLayout);


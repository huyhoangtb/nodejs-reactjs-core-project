import React from "react";
import {Layout} from 'antd';
import menuSchema from './menu-schema';
import Menu from 'layouts/common/menu';
import LoginedUser from 'components/common/viewers/login-user';

const {Header} = Layout;

class AdminTopMenu extends React.Component {
  
  render() {
    return (
      <Header className="ui-header-admin">
        <Menu theme="dark"
              mode="horizontal"
              className="ui-header-menu flex-grow-1"
              defaultSelectedKeys={['abcdef', '12312']}
              style={{lineHeight: '64px'}}
              schema={menuSchema}/>
        
        {/*<div className="setting-top-header">*/}
        {/*<Link className="top-administrator" to={''}><Icon type="setting" theme="outlined"/> Setting </Link>*/}
        {/*</div>*/}
        <div className="flex-center">
          <LoginedUser/>
        </div>
      </Header>
    );
  }
}

export default AdminTopMenu;

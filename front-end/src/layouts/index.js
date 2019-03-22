import React from "react";
import {connect} from "react-redux";
import Translate from "i18n";
import contextActions from 'action-creators/context'
import {matchRoutes, renderRoutes} from "react-router-config";
import LayoutRegister from "./register";
import {checkRoles} from 'configs/Roles';
import PageIsLoading from 'components/common/viewers/page-is-loading';
import {Icon, notification} from 'antd';
import ReactDOM from "react-dom";
import {history} from "../store";
import userActionCreators from "../action-creators/user";
import "./layout-common.css";
import "antd/dist/antd.less";
import styleConfigs from "../configs/style";

const defaultLoadingProps = {
  type: 'bars',
  color: styleConfigs.PRIMARY_COLOR,
  height: 'auto',
  width: '40px'
}

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 25/04/2017
 **/
class Layouts extends React.Component {
  handleOnChangeLayout = (nextProps) => {
    const {dispatch, location, route, currentLayout} = nextProps || this.props;
    if (!location) {
      return;
    }
    const branch = matchRoutes(route.routes, location.pathname);
    if (!branch || branch.length === 0) {
      return;
    }
    if (branch[0].route && branch[0].route.layout && (!this.state.layoutId || branch[0].route.layout !== this.state.layoutId)) {
      const layoutId = branch[0].route.layout;
      const params = branch[0].route.params || {};
      this.setState({layoutId});
    }
    const roles = branch[0].route['roles'];
    if (roles && roles.length > 0) {
      this.checkPermission(branch[0].route);
    }
  }
  checkPermission = (branch) => {
    const roles = branch['roles'];
    
    const {user, dispatch} = this.props;
    if (!user || !user.info || Object.keys(user.info).length === 0) {
      this.notificationNotLogin();
      dispatch(userActionCreators.logout());
      history.push('/login');
    }
    
    if (!checkRoles(roles)) {
      this.notificationNotPermission();
      dispatch(userActionCreators.logout());
      history.push('/login');
    }
  }
  notificationNotLogin = () => {
    notification.open({
      message: 'Vui lòng đăng nhập hệ thống',
      description: 'Bạn vui lòng đăng nhập vào hệ thống để thực hiện chức năng.',
      icon: <Icon type="smile-circle" style={{color: '#108ee9'}}/>,
    });
  }
  notificationNotPermission = () => {
    notification.open({
      message: Translate.t1('Bạn không có quyền truy cập chức năng.'),
      description: 'Phiên làm việc của bạn đã hết hạn hoặc bạn không có quyền truy cập chức năng này.',
      icon: <Icon type="smile-circle" style={{color: '#108ee9'}}/>,
    });
  }
  
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      router: {}
    };
  }
  
  componentDidMount() {
    window.messagePopup = ReactDOM.findDOMNode(this.refs.messagePopup);
    this.handleOnChangeLayout();
    console.log(this.props);
  }
  
  componentWillMount() {
    const {dispatch, siteConfigs} = this.props;
    dispatch(contextActions.getApplicationContext());
    window.NProgress.configure({
      template: `<div class="bar" role="bar"><div class="peg" ></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>`
    });
  }
  
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname) {
      this.handleOnChangeLayout(nextProps);
    }
  }
  
  componentWillUnmount() {
    window.messagePopup = undefined;
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  render() {
    const {children, route} = this.props;
    const layoutId = this.state.layoutId
    let Notify = this.props.Notify || {};
    
    if (!layoutId) {
      return (<div>Site not found</div>);
    }
    const CurrentLayoutConfig = LayoutRegister[layoutId];
    return (
      <div className="ui-root-layout">
        <PageIsLoading/>
        
        <CurrentLayoutConfig.component>
          {renderRoutes(route.routes)}
        </CurrentLayoutConfig.component>
      
      
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentLayout: state.layout,
  }
};

export default connect(mapStateToProps)(Layouts);

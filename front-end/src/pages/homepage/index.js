import React from 'react';
import {connect} from 'react-redux';
import {Button, Tabs} from 'antd';
import TabViewer from 'components/common/viewers/tab-viewer';
import TradingView from 'components/trading-view';
import './stylesheet.css';

const TabPane = Tabs.TabPane;
const operations = <Button>Extra Action</Button>;

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 05/12/2017
 **/
class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps componentWillReceivePropscomponentWillReceivePropscomponentWillReceiveProps');
  }
  
  render() {
    return (
      <div></div>
    )
    return (
      <TabViewer>
        <TradingView/>
      </TabViewer>
    );
  }
}


export default connect()(Homepage);


//
//
// <div className="homepage">
//   <div className="home-list-order">
//     <TabViewer>
//       <TradingView/>
//     </TabViewer>
//   </div>
//   <div className="home-quick-order">
//     <div className="quick-header">
//       <Link className="home-help-btn" to="help"> How it work? </Link>
//     </div>
//     <CreateBuyOrder/>
//   </div>
//
// </div>

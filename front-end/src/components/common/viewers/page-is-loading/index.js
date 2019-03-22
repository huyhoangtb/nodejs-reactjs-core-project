import React from "react";
import {connect} from "react-redux";
import Translate from "i18n";
import ReactLoading from 'react-loading';
import styleConfigs from "configs/style";
import "./stylesheet.css";

const defaultLoadingProps = {
  type: 'bars',
  color: styleConfigs.PRIMARY_COLOR,
  width: 40
}

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 25/04/2017
 **/
class PageIsLoading extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const common = this.props.common || {};
    let style = {};
    if (common.showLoadingPageIcon) {
      style = {display: 'block'};
    } else {
      style = {display: 'none'};
    }
    return (
      <div className="loading-panel" style={style}>
        <div className="loading-sub-panel">
          <div>
            <ReactLoading {...defaultLoadingProps}/>
            {Translate.t1('Page is loading ...')}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    common: state.common,
  }
};

export default connect(mapStateToProps)(PageIsLoading);

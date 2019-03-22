import React from "react";
import './stylesheet.css';

class TabViewer extends React.Component {
  render() {
    return (
      <div className="ui-custom-tab-viewer">
        <div className="tab-header">
          <div className="tab-title highlight-text">
            Top Orders
          </div>
          <div className="tab-header-item-panel">
            <ul className="tab-header-items">
              <li className="tab-item active-tab">
                Giao dịch bán
              </li>
              <li className="tab-item">
                Giao dịch mua
              </li>
              <li className="tab-item">
                Đã đánh dấu
              </li>
              <li className="tab-item">
                Của tôi
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default TabViewer;

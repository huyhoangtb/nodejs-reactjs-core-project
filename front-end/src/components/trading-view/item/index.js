import React from "react";
import {Link} from 'react-router-dom';
import {Avatar} from 'antd';

class TradingItem extends React.Component {
  render() {
    
    const orderDetailLink = "";
    
    return (
      <div className="trading-item">
        <div className="quantity-panel">
          <Link className="amount" to={orderDetailLink}>
            0.5 btc
          </Link>
          <Link className="price" to={orderDetailLink}>
            200.000.000 vnđ
          </Link>
        </div>
        <div className="another-detail">
          <div className="trading-title">
            Chuyển khoản qua Vietcombank
            <Link className="buy-it" to={''}>(buy now)</Link>
          </div>
          <div className="trading-detail">
            <div className="order-detail">
              Tối thiểu: 0.01 btc
            </div>
            <div className="user-profile">
              <div className="avatar">
                <Avatar size='small' src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>
              </div>
              <div className="trading-naming">
                
                <Link to={''}>Peter Hoang Nguyen</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TradingItem;

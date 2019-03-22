import React from "react";
import TradingItem from './item';
import './stylesheet.css';

class TradingView extends React.Component {
  render() {
    return (
      <div className="trading-view">
        <TradingItem/>
        <TradingItem/>
        <TradingItem/>
      </div>
    );
  }
}

export default TradingView;

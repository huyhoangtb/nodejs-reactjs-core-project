import React from 'react';
import endpoints from 'configs/endpoints';
import {connect} from 'react-redux';
import {formatMoney} from 'common';
import {Alert, Button} from 'antd';
import BankInfo from 'components/common/viewers/bank-info';
import ReactCountdownClock from 'react-countdown-clock';
import DescPanel from 'components/common/viewers/desc-panel';
import DescItem from 'components/common/viewers/desc-panel/DescItem';
import CopyIcon from 'components/common/viewers/copy-icon';
import transactionActions from "../../../../action-creators/transaction";
import nodeDataActions from "../../../../action-creators/node-data";

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 05/12/2017
 **/
class TransactionViewer extends React.Component {
  confirmedMoneySent = () => {
    const {dispatch, transactionIid, currency} = this.props;
    const url = endpoints.transaction.confirmedSentMoney(transactionIid);
    const options = {
      onSuccess: this.onCreateTransactionSuccess,
      onFail: this.onCreateTransactionFail,
      dispatchAfterSuccess: (result) => {
        return transactionActions.setTransactionOnView(currency.currency, result);
      }
    }
    dispatch(nodeDataActions.updateNode(url, undefined, options));
  }
  cancelMoneySent = () => {
    const {dispatch, transactionIid, currency} = this.props;
    const url = endpoints.transaction.cancelSentMoney(transactionIid);
    const options = {
      onSuccess: this.onCreateTransactionSuccess,
      onFail: this.onCreateTransactionFail,
      dispatchAfterSuccess: (result) => {
        return transactionActions.setTransactionOnView(currency.currency, result);
      }
    }
    dispatch(nodeDataActions.updateNode(url, undefined, options));
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {transaction, transactionTypes, currency} = this.props;
    const header = this.props.header || 'Vui lòng chuyển khoản theo đúng các thông tin bên dưới';
    const buttonLabel = this.props.buttonLabel || 'Tôi đã thực hiện giao dịch';
    const evidenceFiles = transaction && transaction.evidenceFiles ? transaction.evidenceFiles : [];
    const transactionCounterTime = transaction && transaction.counterTime ? transaction.counterTime : 0;
    console.log(transaction);
    return (
      <div>
        {
          transaction &&
          <div>
            {transactionCounterTime > 0 &&
            <div className="text-align-center clock-panel-center">
              <div>
                <ReactCountdownClock seconds={transactionCounterTime}
                                     color="#1890ff"
                                     alpha={0.9}
                                     size={100}
                                     onComplete={this.onFinished}/>
              </div>
            </div>
            }
            
            {
              transactionCounterTime === 0 &&
              <Alert message="Bạn đã hết thời gian thực hiện giao dịch" type="info" showIcon/>
            }
            
            <DescPanel>
              
              <DescItem rightData={
                <h2 className="header-title">{header}</h2>
              }/>
              
              {
                transaction.type === transactionTypes.SELLING.value && transaction.transactionDetails && transaction.transactionDetails.length > 0 &&
                <div>
                  <DescItem label="Loại tiền" rightData={`${transaction.currency} (${transaction.currencyName})`}/>
                  <DescItem label="Số tiền" rightData={`${formatMoney(transaction.transactionDetails[0].amount, 6)}`}>
                    <CopyIcon value={transaction.amount} copedTitle="đã sao chép" title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  <DescItem label="Địa chỉ ví" rightData={transaction.transactionDetails[0].accountAddress}>
                    <CopyIcon value={transaction.transactionDetails[0].accountAddress} copedTitle="đã sao chép"
                              title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  <DescItem rightData={
                    <h2 className="header-title">Bạn sẽ nhận được tiền mặt theo thông tin sau:</h2>
                  }/>
                  <BankInfo isMainPanel={false} value={transaction.banking || {}}/>
                  <DescItem label="Số tiền" rightData={`${formatMoney(transaction.cashAmount, 0, '.', ',')}`}>
                    <CopyIcon value={transaction.amount} copedTitle="đã sao chép" title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                </div>
              }
              
              {
                transaction.type === transactionTypes.BUYING.value
                && transaction.transactionDetails
                && transaction.transactionDetails.length > 0 &&
                <div>
                  <BankInfo isMainPanel={false} value={transaction.banking || {}}/>
                  <DescItem label="Số tiền" rightData={`${formatMoney(transaction.cashAmount, 0, '.', ',')}`}>
                    <CopyIcon value={transaction.amount} copedTitle="đã sao chép" title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  
                  <DescItem label="Nội dung chuyển khoản" rightData={`${transaction.userIid}-${transaction.iid}`}>
                    <CopyIcon value={`${transaction.userIid}-${transaction.iid}`} copedTitle="đã sao chép"
                              title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  
                  <DescItem rightData={
                    <h2 className="header-title">{`Bạn sẽ nhận được ${currency.currency} theo thông tin bên dưới:`}</h2>
                  }/>
                  <DescItem label="Loại tiền" rightData={`${transaction.currency} (${transaction.currencyName})`}/>
                  <DescItem label="Địa chỉ ví" rightData={`${transaction.transactionDetails[0].accountAddress}`}>
                    <CopyIcon value={`${transaction.transactionDetails[0].accountAddress}`} copedTitle="đã sao chép"
                              title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  <DescItem label="Số lượng tiền" rightData={`${transaction.transactionDetails[0].amount}`}>
                    <CopyIcon value={`${transaction.transactionDetails[0].amount}`} copedTitle="đã sao chép"
                              title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                </div>
              }
              
              {
                (transaction.type === transactionTypes.WITHDRAW.value || transaction.type === transactionTypes.DEPOSIT.value) &&
                <div>
                  <DescItem label="Loại tiền" rightData={`${transaction.currency} (${transaction.currencyName})`}/>
                  <DescItem label="Số tiền" rightData={`${formatMoney(transaction.cashAmount, 0, '.', ',')}`}>
                    <CopyIcon value={transaction.amount} copedTitle="đã sao chép" title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                  <BankInfo isMainPanel={false} value={transaction.banking || {}}/>
                  <DescItem label="Nội dung chuyển khoản" rightData={`${transaction.userIid}-${transaction.iid}`}>
                    <CopyIcon value={`${transaction.userIid}-${transaction.iid}`} copedTitle="đã sao chép"
                              title="Sao chép số tiền">
                    </CopyIcon>
                  </DescItem>
                </div>
              }
            
            
            </DescPanel>
            <div className="text-align-right">
              <Button type="primary" onClick={this.cancelMoneySent}>Hủy giao dịch</Button>
              <Button type="primary" className="m-l-20" onClick={this.confirmedMoneySent}>{buttonLabel}</Button>
            
            </div>
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  
  const {currency} = props;
  let transaction = null;
  if (state.transaction && state.transaction.viewer) {
    transaction = state.transaction.viewer[currency.currency];
  }
  return {
    transaction,
    transactionTypes: state.context.publicContext.transactionTypes || {}
  }
}

export default connect(mapStateToProps)(TransactionViewer);

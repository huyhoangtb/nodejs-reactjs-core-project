import React from 'react';
import endpoints from 'configs/endpoints';
import {connect} from 'react-redux';
import {Alert, Button} from 'antd';
import transactionActions from "../../../../action-creators/transaction";
import nodeDataActions from "../../../../action-creators/node-data";
import UploadComponent from 'components/common/Upload';

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 05/12/2017
 **/
class TransactionViewer extends React.Component {
  transactionFinished = () => {
    const {dispatch, transactionIid, currency} = this.props;
    const url = endpoints.transaction.finishedTransaction(transactionIid);
    const options = {
      onSuccess: this.onCreateTransactionSuccess,
      onFail: this.onCreateTransactionFail,
      dispatchAfterSuccess: (result) => {
        return transactionActions.setTransactionOnView(currency.currency, result);
      }
    }
    dispatch(nodeDataActions.updateNode(url, undefined, options));
  }
  onUploadSuccess = (response) => {
    const {currency, dispatch} = this.props;
    dispatch(transactionActions.setTransactionOnView(currency.currency, response.result));
  }

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {transaction, transactionIid, transactionTypes} = this.props;
    const evidenceFiles = transaction && transaction.evidenceFiles ? transaction.evidenceFiles : [];
    const transactionCounterTime = transaction && transaction.counterTime ? transaction.counterTime : 0;
    console.log(transaction);
    return (
      <div>
        {
          transaction &&
          <div>
            {
              transaction.status === 2 && transaction.type === transactionTypes.DEPOSIT.value &&
              <div>
                <Alert
                  message="Chúc mừng, bạn đã thực hiện giao dịch thành công, chúng tôi đang thực hiện cập nhật tài khoản của bạn, vui lòng chờ!..."
                  type="success" showIcon/>
                <UploadComponent
                  label={"Gửi bằng chứng giao dịch"}
                  accept={'image/*'}
                  maxFileNumber={5}
                  onSuccess={this.onUploadSuccess}
                  url={endpoints.transaction.uploadEvidence(transactionIid)}
                  fileList={evidenceFiles}/>
                <div className="text-align-right">
                  <Button type="primary" onClick={this.confirmedMoneySent}>Gửi yêu cầu support</Button>
                </div>
              </div>
            }
            
            {
              transaction.status === 2 && transaction.type === transactionTypes.WITHDRAW.value &&
              <div>
                <Alert
                  message="Chúng tôi đang thực hiện giao dịch rút tiền, vui lòng chờ trong ít phút!..."
                  type="success" showIcon/>
                <div className="text-align-right m-t-20">
                  <Button type="primary" onClick={this.confirmedMoneySent}>Gửi yêu cầu support</Button>
                </div>
              </div>
            }
            
            {
              transaction.status === 2 && transaction.type === transactionTypes.BUYING.value &&
              <div>
                <Alert
                  message="Giao dịch mua thành công, vui lòng chờ người bán xác nhận!..."
                  type="success" showIcon/>
                <div className="text-align-right m-t-20">
                  <Button type="primary" onClick={this.confirmedMoneySent}>Gửi yêu cầu support</Button>
                </div>
              </div>
            }
            
            {
              transaction.status === 2 && transaction.type === transactionTypes.SELLING.value &&
              <div>
                <Alert
                  message="Giao dịch bán thành công, vui lòng chờ người mua xác nhận!..."
                  type="success" showIcon/>
                <div className="text-align-right m-t-20">
                  <Button type="primary" onClick={this.confirmedMoneySent}>Gửi yêu cầu support</Button>
                </div>
              </div>
            }
            
            {
              transaction.status === 3 &&
              <div className="m-b-25">
                <Alert
                  message="Giao dịch đã Hủy"
                  type="warning" showIcon/>
              </div>
              
            }
          
          
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
    transactionTypes: state.context.publicContext.transactionTypes,
  }
}

export default connect(mapStateToProps)(TransactionViewer);

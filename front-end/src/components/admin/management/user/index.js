import React from 'react';
import Translate from 'i18n/index';
import UIPanel from 'components/admin/common/panel';
import FormCommon from 'schema-form/common/index'
import {Button, Col, DatePicker, Form, Input, Row, Select, TreeSelect} from 'antd';
import {connect} from 'react-redux';
import './stylesheet.css';

const FormItem = Form.Item;
const TreeNode = TreeSelect.TreeNode;

/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 **/
class MyComponent extends React.Component {
  onFormRequest = (event) => {
    const options = FormCommon.submitOptions;
    options.networkMethod = 'postAsForm';
    
    FormCommon.submitForm(event, this.props.form, options)
  }
  focus = (event) => {
    console.log('aaaaaaaaaaaaa');
  }
  onChange = (event, a, b, c) => {
    console.log('onChange', event, a, b, c);
    return [{
      value: 1,
      label: '12321312'
    }];
  }
  onSelect = (event) => {
    console.log('onSelect');
  }
  loadData = (node) => {
    console.log('loadData', node);
    return new Promise(function (resolve, reject) {
      resolve([{
        value: 1,
        label: '12321312'
      }])
    });
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {getFieldDecorator} = this.props.form;
    
    return (
      <UIPanel className="ui-admin-user">
        <Form className="ui-my-component-form">
          <Row type="flex" gutter={15}>
            <Col span={6}>
              <FormItem>
                {getFieldDecorator('_s')(
                  <TreeSelect
                    showSearch
                    style={{width: '100%'}}
                    dropdownStyle={{maxHeight: 400, overflow: 'auto'}}
                    placeholder="Choose the original"
                    allowClear
                    onChange={this.onChange}
                    loadData={this.loadData}
                    onSelect={this.onSelect}
                  >
                    <TreeNode value="parent 1" title="parent 1" key="0-1">
                      <TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
                      
                      </TreeNode>
                      <TreeNode value="parent 1-1" title="parent 1-1" key="random2">
                        <TreeNode value="sss" title={<b style={{color: '#08c'}}>sss</b>} key="random3"/>
                      </TreeNode>
                    </TreeNode>
                  </TreeSelect>
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <FormItem>
                {getFieldDecorator('_s')(
                  <Input placeholder={Translate.t1('name, username, emaili ...!')}/>
                )}
              </FormItem>
            </Col>
            <Col span={6}>
              <DatePicker style={{width: '100%'}} onChange={this.onChange}/>
            </Col>
            <Col span={6}>
              <Select defaultValue="lucy" style={{width: '100%'}} disabled>
                <Option value="lucy">Lucy</Option>
              </Select>
            </Col>
          </Row>
          
          <Button type="primary" onClick={this.onFormRequest} className="login-form-button">
            {Translate.t1('Login')}
          </Button>
        </Form>
      </UIPanel>
    );
  }
}

export default connect()(Form.create()(MyComponent));

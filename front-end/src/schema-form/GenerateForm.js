import React from 'react';
import {Col, Form, Row} from 'antd';
import {connect} from 'react-redux';
import Sform from './Sform';
import PropTypes from 'prop-types';
import {generateElement, getFragment} from "./ElementTypes";
import './stylesheet.css';
import Translate from "i18n";

const FormItem = Form.Item;


/**
 * Created by Peter Hoang Nguyen
 * Email: vntopmas@gmail.com
 * Tel: 0966298666
 * created date 05/12/2017
 **/
class GenerateForm extends React.Component {
  getFields = () => {
    const {getFieldDecorator} = this.props.form;
    const {schema, schemaLayout} = this.props;
    const children = [];
    const elements = schema(this);
    const fragments = (this.props && this.props.fragments) || {};
    elements.map((item, i) => {
      const fragment = getFragment(fragments, item);
      let renderComponent = null;
      
      let decorator = item.decoratorOption || {};
      if (item.validator) {
        if (decorator.rules) {
          decorator.rules.push({
            validator: (rule, value, callback) => {
              item.validator(rule, value, callback, this.props)
            }
          });
        } else {
          decorator = {
            ...decorator, rules: [{
              validator: (rule, value, callback) => {
                item.validator(rule, value, callback, this.props)
              }
            }]
          };
        }
      }
      
      const itemLayout = item.isFull ? {} : (schemaLayout ? schemaLayout : {});
      
      const component = <FormItem
        className={(fragment && (fragment.after || !fragment.before)) ? 'have-after-fragment' : ''} {...itemLayout}
        label={item.label}>
        {getFieldDecorator(`${item.name}`, {...decorator})(
          generateElement(item, this.props)
        )}
      </FormItem>
      
      if (!fragment) {
        renderComponent = component;
      } else if (fragment.after || fragment.before) {
        renderComponent = (
          <div key={`${item.name}-ab-panel-fragment`}>
            {fragment.before && fragment.before(this.props)}
            {component}
            <div className="ant-form-item">
              {fragment.after && fragment.after(this.props)}
            </div>
          
          </div>
        )
      } else {
        renderComponent = (
          <div key={`${item.name}-panel-fragment`}>
            {component}
            <div className="ant-form-item">
              {fragment(this.props)}
            </div>
          </div>
        )
      }
      
      children.push(
        <Col span={item.colSpan} key={`${item.name}-${i}`}>
          {renderComponent}
        </Col>
      );
    });
    
    return children;
  }
  
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    
    return (
      <Sform {...this.props}>
        <Row>{this.getFields()}</Row>
      </Sform>
    );
  }
}


GenerateForm.propTypes = {
  /**
   * aaaaa
   */
  className: PropTypes.string,
  url: PropTypes.string,
  submitLabel: PropTypes.string,
  formProps: PropTypes.object,
  fragments: PropTypes.object,
  schemaLayout: PropTypes.object,
  schema: PropTypes.object,
  onSuccess: PropTypes.func,
  onFail: PropTypes.func,
  dispatchAfterSuccess: PropTypes.func,
};

GenerateForm.defaultProps = {
  className: '',
  url: '',
  submitLabel: Translate.t1('summit'),
  formProps: {},
  fragments: {},
  schemaLayout: {},
  schema: {},
  onSuccess: undefined,
  onFail: undefined,
  dispatchAfterSuccess: undefined,
};


export default connect()(Form.create()(GenerateForm));

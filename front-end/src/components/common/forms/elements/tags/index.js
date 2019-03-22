import React from "react";
import {DEFAULT_COLOR, sheet} from 'common/css/generateCss';
import "./stylesheet.css";

class PixelzTag extends React.Component {
  handleOnKeyDown = (event) => {
    const keyCode = event.which;
    if (keyCode === 13 || keyCode === 32 || keyCode === 186 || keyCode === 188) {
      this.handleTagsChange(event);
    }
  }
  handleTagsChange = (event) => {
    const values = this.getValue();
    const {validation, onInvalidInput} = this.props;
    let newValue = event.target.value || '';
    newValue = newValue.trim();
    if (newValue.endsWith(';') || newValue.endsWith(',')) {
      newValue = newValue.substr(0, newValue.length - 1);
    }
    if (!newValue) {
      if (!values || values.length === 0) {
        onInvalidInput(false);
      } else {
        this.notifyDataChange(values, values, event);
      }
      return;
    }
    
    if (validation && onInvalidInput && !validation(newValue)) {
      onInvalidInput(true);
      return;
    }
    if (onInvalidInput) {
      onInvalidInput(false);
    }
    
    const newValues = [...values, newValue];
    this.notifyDataChange(newValues, values, event);
  }
  notifyDataChange = (newValues, oldValues, event) => {
    const {input, onChange, onDataChange} = this.props;
    if (input) {
      input.onChange(newValues);
    }
    if (onChange) {
      onChange(newValues);
    }
    if (onDataChange) {
      onDataChange(newValues);
    }
    this.setState({value: ''});
  }
  handleChange = (event) => {
    let newValue = event.target.value || '';
    newValue = newValue.trim();
    if (newValue.endsWith(';') || newValue.endsWith(',')) {
      newValue = newValue.substr(0, newValue.length - 1);
    }
    this.setState({value: newValue});
  }
  onFocus = () => {
    this.setState({focusClass: 'on-focus'});
    this.refs.inputText.focus();
  }
  onBlur = (event) => {
    this.setState({focusClass: ''});
    this.handleTagsChange(event);
  }
  removeItem = (index, event) => {
    const values = this.getValue();
    const newValues = [...values];
    newValues.splice(index, 1);
    this.notifyDataChange(newValues, values, event);
  }
  getValue = () => {
    const {input} = this.props;
    if (!input) {
      return []
    }
    return input.value;
    
  }
  getTagsSize = () => {
    let {value} = this.state;
    value = value || '';
    if (value.length < 32) {
      return 32;
    }
    if (value.length > 48.5) {
      return 48.5;
    }
    return value.length;
  }
  
  constructor(props) {
    super(props);
    this.state = {values: []};
    this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    const props = {...this.props};
    let {className} = props;
    let {input, color} = props;
    delete props.input;
    delete props.meta;
    delete props.onDataChange;
    delete props.validation;
    delete props.onInvalidInput;
    color = color || DEFAULT_COLOR;
    sheet('ptags').innerHTML = ` .ui-input-tags span.tag .remove::after { color: ${color} !important; } .ui-input-tags .ui-input-tags:focus {border: 1px solid ${color} !important;}`;
    
    const {focusClass, values} = this.state;
    className = className || '';
    className = `${className} ui-input-tags ${focusClass}`;
    return (
      <div className={className} onClick={this.onFocus}>
        {
          input && input.value &&
          input.value.map((value, index) => (
            <span className="tag" key={`tags-${index}`}>
              {value}
              <span
                onClick={(event) => {
                  this.removeItem(index, event);
                }} className="remove"
              />
            </span>
          ))
        }
        <input
          ref="inputText"
          onKeyDown={this.handleOnKeyDown}
          onChange={this.handleChange}
          size={this.getTagsSize()}
          value={this.state.value}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        />
      
      </div>
    );
  }
}

export default PixelzTag;

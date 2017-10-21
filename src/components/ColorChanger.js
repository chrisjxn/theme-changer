import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      allowEdit: props.checkStatus
    })
  }

  render() {
    return (
      <select className="dropDownContainer"
        disabled={this.state.allowEdit === 'false'}
        onChange={e => this.props.update(e.target.value)}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}
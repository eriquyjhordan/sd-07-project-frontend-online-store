import React, { Component } from 'react';
import * as css from './style';

class Button extends Component {
  render() {
    const { children, getEvent } = this.props;
    return (
      <css.Button {...this.props} type="button" onClick={(event) => getEvent(event)}>
        {children}
      </css.Button>
    );
  }
}

export default Button;

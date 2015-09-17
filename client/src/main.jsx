import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

class Main extends Component {
  render() {
    return (
      <div>Hello World!</div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};

document.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(<Main />,document.getElementById('app'));
});

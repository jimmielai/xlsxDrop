import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Dropzone from 'Dropzone.jsx'

class Main extends Component {
  render() {
    return (

      <div>
        <h2>Hello World!</h2>
        <Dropzone />
      </div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};

document.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(<Main />,document.getElementById('app'));
});

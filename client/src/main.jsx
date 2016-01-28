import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import Dropzone from './Dropzone'

class Main extends Component {
  render() {
    return (

      <div>
        <h2>Excel2JSON!</h2>
        <Dropzone />
        <h4>Readme</h4>
        <ol>
          <li>Format the excel file so that the column headings appear on Row #1. The column headings will be the object keys.</li>
          <li>Any special formatting on numbers (dollar signs, commas, etc.) will force the JSON data type to a STRING. Numbers with no formatting will output as DOUBLE.</li>
          <li>The dataset will </li>
        </ol>
      </div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};

document.addEventListener('DOMContentLoaded',()=>{
  ReactDOM.render(<Main />,document.getElementById('app'));
});

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
          <li>Only the first tab in the excel file will be converted.  TODO: Dropdown select box to pick which tab to convert.</li>
          <li>The converted JSON will automatically be downloaded with the matching file name with an extension of JSON. Internet Explorer & MS Edge users will get a GUID with no extension, just rename it and add .json to the end of the file.</li>
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

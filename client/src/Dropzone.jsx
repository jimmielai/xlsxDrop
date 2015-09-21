import React, { PropTypes } from 'react'

function getStateFromStores() {
  return {
    loaded: true
  }
}
export default class Dropzone extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount() {
    if(this.refs.drop.addEventListener){
      this.refs.drop.addEventListener('dragenter', this._handleDragover);
      this.refs.drop.addEventListener('dragover', this._handleDragover);
      this.refs.drop.addEventListener('drop', this._handleDrop);
    }
  }

  componentWillUnmount() {
    if(this.refs.drop.removeEventListener){
      this.refs.drop.removeEventListener('dragenter', this._handleDragover);
      this.refs.drop.removeEventListener('dragover', this._handleDragover);
      this.refs.drop.removeEventListener('drop', this._handleDrop);
    }
  }

  _handleDrop(e){
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    let reader = new FileReader();
    alert(files[0].name);
  }

  _handleDragover(e){
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  render() {
    let dropStyle = {
      border: "2px dashed #bbb",
    "MozBorderRadius": "5px",
    "WebkitBorderRadius": "5px",
    borderRadius: "5px",
    padding: "25px",
    textAlign: "center",
    font: "20pt bold, Vollkorn",
    color: "#bbb"
    }
    return (
       <div id="drop" ref="drop" style={dropStyle}>
         Drop an XLSX / XLSM / XLSB / XLS file here to upload data sheet
       </div>
    );
  }
}
Dropzone.propTypes = {};
Dropzone.defaultProps = {
  loaded: false
};
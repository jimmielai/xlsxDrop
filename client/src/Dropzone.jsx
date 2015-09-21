import React, { PropTypes } from 'react'

export default class Dropzone extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fileName: '',
      loaded: false,
      output:''
    }
  }
  componentDidMount() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

    } else {
      alert('The File APIs are not fully supported in this browser.');
    }
    if(this.refs.drop.addEventListener){
      this.refs.drop.addEventListener('dragenter', this._handleDragover.bind(this),false);
      this.refs.drop.addEventListener('dragover', this._handleDragover.bind(this),false);
      this.refs.drop.addEventListener('drop', this._handleDrop.bind(this),false);
    }
  }

  componentWillUnmount() {
    if(this.refs.drop.removeEventListener){
      this.refs.drop.removeEventListener('dragenter', this._handleDragover.bind(this),false);
      this.refs.drop.removeEventListener('dragover', this._handleDragover.bind(this),false);
      this.refs.drop.removeEventListener('drop', this._handleDrop.bind(this),false);
    }
  }

  _handleDrop(e){
    e.stopPropagation();
    e.preventDefault();
    let files = e.dataTransfer.files;
    let file = files[0];
    let reader = new FileReader();
    reader.onload = (e)=>{
      let data = e.target.result;
      data = this._fixdata(data);
      data = XLSX.read(btoa(data),{type: 'base64'});
      this._process(data);
    };
    reader.readAsArrayBuffer(file);
  }

  _fixdata(data){
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }

  _process(data){
    this.setState({output:JSON.stringify(this._toJSON(data), 2, 2)})
  }

  _toJSON(workbook){
    let result = {};
    workbook.SheetNames.forEach(function(sheetName) {
      var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
      if(roa.length > 0){
        result[sheetName] = roa;
      }
    });
    return result;
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
      <div>
       <div id="drop" ref="drop" style={dropStyle}>
         Drop an XLSX / XLSM / XLSB / XLS file here to upload data sheet
       </div>
        <div id="out" ref="out">{this.state.output}</div>
      </div>
    );
  }
}
Dropzone.propTypes = {};

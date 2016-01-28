import React, { PropTypes } from 'react'
import req from 'superagent'

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
      alert('This browser is not compatible, please use a modern browser.');
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
    console.log("file dropped",  e.dataTransfer.files[0].name);
    let file = e.dataTransfer.files[0];
    let fileName = `${file.name.replace(/\.[^/.]+$/, "")}.json`;
    let reader = new FileReader();
    reader.onload = (e)=>{
      let data = e.target.result;
      data = this._fixdata(data);
      data = XLSX.read(btoa(data),{type: 'base64'});
      this._process(data, this._download.bind(this, fileName));
    };
    reader.readAsArrayBuffer(file);
  }

  _fixdata(data){
    var o = "", l = 0, w = 10240;
    for(; l<data.byteLength/w; ++l) o+=String.fromCharCode.apply(null,new Uint8Array(data.slice(l*w,l*w+w)));
    o+=String.fromCharCode.apply(null, new Uint8Array(data.slice(l*w)));
    return o;
  }

  _process(_data,cb){
    data = this._toJSON(_data);
    console.log(data);
    cb(JSON.stringify(data["Sheet1"]));
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

  _download(filename, json){
    //http://fiddle.jshell.net/UZrzW/
    let type = 'text/plain;charset=utf-8';
    json = new Blob([json], {type});
    let element = document.createElement('a');
    element.href = window.URL.createObjectURL(json);
    element.setAttribute('download', filename);
    element.style.display='none';
    document.body.appendChild(element);

    element.click();
    document.body.removeChild(element);
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
      </div>
    );
  }
}
Dropzone.propTypes = {};


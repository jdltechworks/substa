import React from 'react';
import Dropzone from 'react-dropzone';
import _ from 'lodash';

export const domOnlyProps = ({
  initialValue,
  autofill,
  onUpdate,
  valid,
  invalid,
  dirty,
  pristine,
  active,
  touched,
  visited,
  autofilled,
  asyncValidating,
  name,
  input,
  error,
  tag,
  ...domProps }) => domProps;

export const END_POINT = () => {
  let api = '//localhost:8000/api'
  if(_.eq(process.env.NODE_ENV, 'production')) {
    api = '//subasta-jdltechworks.rhcloud.com/api';
  }
  console.log(api);
  console.log(process.env.NODE_ENV);
  return api;
}


/**
 * Must be binded inside a react render / component
 * @param  {object} fieldConfig configuration of the field that you declared in a react/redux form
 * @param  {string} field       name of the field
 * @return {react component}             return an html that is generated from react
 */
export const renderField = function(fieldConfig, field) {
  const fieldHelper = this.props.fields[field];
  const { files } = this.state;
  var i = 0;
  if(_.includes(['textarea', 'selectbox'], fieldConfig.tag)) {
    return ( <div key={field} className="form-group">
      <fieldConfig.tag className="form-control" {...domOnlyProps(fieldHelper)} />
       { fieldHelper.touched && fieldHelper.error && <div>{fieldHelper.error}</div> }
      </div>
    );
  }
  if(_.eq(fieldConfig.type, 'file')) {
    fieldHelper.value = [];
    return (
      <Dropzone key={field} multiple={true} onDrop={(file, e) => { 
        fieldHelper.onChange('file');
        for(var key in file){
          files.push(file[key]);  
        }
      }} />
    );
  }
  return( <div key={field} className="form-group">
  <fieldConfig.tag type={fieldConfig.type} className="form-control" {...domOnlyProps(fieldHelper)} />
   {fieldHelper.touched && fieldHelper.error && <div>{fieldHelper.error}</div>}
  </div> );
};

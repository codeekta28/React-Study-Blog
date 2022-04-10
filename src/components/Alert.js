import React from 'react'

function Alert (props) {
    function capitalize(str){
        return str[0].toUpperCase()+str.slice(1);
    }
  return (
   props.alert&& <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role='alert'
    >
      <strong>
          {capitalize(props.alert.type)} : {props.alert.msg}
          {console.log(props.alert)}
      </strong>
    </div>
  )
}

export default Alert

import React from 'react';

const Third = (props) => {
  return(
    <div>
      First Name : <b>{props.firstName}</b> <br/>
      Last Name : <b>{props.lastName}</b> <br/>
      Company : <b>{props.company}</b>
    </div>
  )
}

export default Third;
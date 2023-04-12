import React from 'react';
import HocComponent from './HocComponent';

const ButtonComponent = (props) => {
    const {counter,IncConter}=props;
    console.log("Porps ",props);
  return (
    <div>
        {counter}
        <br/>
        <button style={{borderRadius:"10px",height:"25px"}} onClick={IncConter}>Click here</button>
    </div>
  )
}

export default HocComponent(ButtonComponent)
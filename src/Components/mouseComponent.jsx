import React from 'react';
import HocComponent from './HocComponent';

const MouseComponent = (props) => {
    const {counter,IncConter}=props;
    console.log("Porps ",props);
  return (
    <div>
        {counter}
        <br/>
        <button style={{borderRadius:"10px",height:"25px"}} onMouseOver={IncConter}>Hover The mouse Here</button>
    </div>
  )
}

export default HocComponent(MouseComponent);
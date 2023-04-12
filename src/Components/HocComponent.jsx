import React, { useState } from 'react'

const HocComponent = (WrappedCompo) => {

    const HocCompo= () =>{
        
        const [count,setCount] = useState(0);
        const IncConter = ()=>{
            setCount(count+1);
        }
        return(
            <div>
                <WrappedCompo counter ={count} IncConter={IncConter}/>
            </div>
        )
    }
  return HocCompo
}

export default HocComponent
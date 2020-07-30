import React, { useState } from 'react';
function Example(){
    const [ count, setcount ] = useState(0)
    return(
        <div>
            <p>现在数字为{count}</p>
            <button onClick= {()=>{setcount(count+1)}}>+</button>
            <button onClick= {()=>{setcount(count-1)}}>-</button>
        </div>
    )
}
export default Example
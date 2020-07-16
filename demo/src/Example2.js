import React, { useState } from 'react';
function Example2(){
    const [ age, setage ] = useState(23);
    const [ sex, setsex ] = useState('man');
    const [ work, setwork ] = useState('前端工程师');
    return(
        <div>
            <p>年纪:{age}</p>
            <p>性别:{sex}</p>
            <p>工作:{work}</p>
        </div>
    )
}
export default Example2
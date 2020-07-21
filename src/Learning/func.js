import React from 'react';

function Func (props){
    const name = props.name;
    console.log(props.children);
    return (
        <div>
            <h1>{name}</h1>
            <button onClick={() => console.log(name)}>Click here to view name</button>
            {props.children}
        </div>
    )
}
export default Func
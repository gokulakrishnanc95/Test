import React from 'react'

function ChildComp (props){
    const message = 'Message from Child to Parent'
    return(
        <div>
            <button onClick = {() => props.clickHandler(message)}>Click Me</button>
            <h1>This is inside ChildComp</h1>
        </div>
    )
}
export default ChildComp
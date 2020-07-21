import React, {useState} from 'react'
import TempSearchBar from './TempSearchBar'

function HookCounter() {
    const initial = 0
    const [count, setCount] = useState(initial)
    return (
        <div>
            <div>
                coutn : {count}
                <button onClick={() => setCount(initial)}>Reset</button>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                <button onClick={() => {
                    return setCount(prevCount => prevCount - 1)
                }}>Decrement</button>
                <button onClick={() => setCount(prevCount => prevCount + 57)}>Increment by 57</button>
            </div>
            <div>
                {/* <form></form> */}
                {/* <TempSearchBar /> */}
            </div>
        </div>
    )
}

export default HookCounter
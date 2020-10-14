import React from 'react'

function Shops(props) {
    return (
        <div>
            {props.shops.map(s => 
                    <p key={s.s_id}>{s.name}</p>
                )}
        </div>
    )
}
export default Shops
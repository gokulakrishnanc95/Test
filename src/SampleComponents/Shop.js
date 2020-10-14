import React from 'react'

function Shop(props) {
    return (
        <div>
            {props.shop.map(s => 
                    <p key={s.s_id}>{s.name}</p>
                )}
        </div>
    )
}
export default Shop
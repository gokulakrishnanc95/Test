import React from 'react'
import ReactDom from 'react-dom'
import './Alert.css'

function Alert (props) {
    
    // render() {
        return ReactDom.createPortal (
            <div className="div1">
                <div className="div2">
                    <b>Alert Box</b> 
                    <hr />
                    {props.children}
                </div>
            </div>,
            document.getElementById("alert"),
        );
    // }
}

export default Alert

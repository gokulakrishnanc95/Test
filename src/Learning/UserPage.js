import React from 'react'
import TabView from './TabView'
import {Button} from 'react-bootstrap'
import './UserPage.css'

function UserPage (props) {
    const handleSubmit = (event) => {
        let status = false
        props.LoginFunc(status)
        event.preventDefault()
    }
    return(
        <div className="UserPage">
            <div id='LogoutButton'>
                <Button type="submit" variant="danger" onClick={handleSubmit}>Logout</Button>
            </div>
            <div>
                <TabView />
            </div>
        </div>
    )
}
export default UserPage
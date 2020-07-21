import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomerTab from './CustomerTab'
import ItemList from './ItemList'
import BillingTab from './BillingTab'
import TestingTab from './TestingTab'

function TabView(props){
    return(
        <React.Fragment>
            <Tabs defaultActiveKey="temp" id="controlled-tab-example" >
                <Tab eventKey="home" title="Home">
                    <p>Reports will be added Shortly</p>
                </Tab>
                <Tab eventKey="bill" title="Billing">
                    <p>This is billing tab</p>
                    <BillingTab />
                </Tab>
                <Tab eventKey="items" title="Items">
                    <ItemList />
                </Tab>
                <Tab eventKey="customer" title="Customer">
                    <CustomerTab />
                </Tab>
                <Tab eventKey="temp" title="Testing Tab">
                    <TestingTab />
                </Tab>
            </Tabs>
        </React.Fragment>
    )
}

export default TabView
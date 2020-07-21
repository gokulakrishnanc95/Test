import React from 'react'
// import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import CustomerList from './CustomerList'
import AddCustomer from './AddCustomer'

function CustomerTab (props){
    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Customer List</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Add Customer</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      {/* <Sonnet /> */}
                      <p>To View Customer Report</p>
                      <CustomerList></CustomerList>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>To Add Customers for this Company Account</p>
                        <AddCustomer />
                      {/* <Sonnet /> */}
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
</Tab.Container>
        </div>
    )
}

export default CustomerTab
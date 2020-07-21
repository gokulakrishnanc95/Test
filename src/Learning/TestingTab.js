import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import HttpGet from './HttpGet'
import HttpPost from './HttpPost'
import HookCounter from './HookCounter'
import BasicSearch from './BasicSearch'

function TestingTab (props){
    return(
        <div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="fourth">
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">HTTP Get Method</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">HTTP Post Method</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Hooks Counter</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="fourth">Basic Search</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={6}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <p>HTTP GET Method using axios</p>
                      <HttpGet />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <p>HTTP POST Method using axios</p>
                        <HttpPost />
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Hooks Counter here</p>
                        <HookCounter />
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                        <p>Basic Search</p>
                        <BasicSearch />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
</Tab.Container>
        </div>
    )
}
   
export default TestingTab
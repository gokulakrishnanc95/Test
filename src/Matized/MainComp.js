import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import TabBar from './TabBar'
import Shopping from './Shopping'
import Orders from './Orders'
import Login from './Login'
import ShopItemsShow from './ShopItemsShow'

class MainComp extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <TabBar />
          <Route path='/Login' component={Login}/>
          <Route exact path='/Shopping' component={Shopping} />
          <Route path='/Orders' component={Orders} />
          <Route path='/Shopping/:shop_id' component={ShopItemsShow} />
          <footer className="page-footer blue lighten-2">
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default MainComp;
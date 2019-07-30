
import React, { Component } from 'react'
import { Switch,Route,Redirect,withRouter } from 'react-router-dom'
import './iconfont/iconfont.css'
import './css/app.css'
import './App.css';
//引入页面
import detail from './pages/detail/detail'
import Home from './pages/Home/index'
import Bourn from './pages/Bourn'
import Consult from './pages/Consult'
import Mine from './pages/Mine'
import DateTrip from './pages/DateTrip/date_trip'
// import Login from './pages/Login/index'
import List from './pages/List/List'

import Login from './pages/Login'

import {connect} from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nav:[
        {
          name: 'Home',
          path: '/home',
          icon: 'home',
          title: '首页',
          iconfont: 'iconfont icon icon-shouye'
        },{
          name: 'Bourn',
          path: '/bourn',
          icon: 'bourn',
          title: '目的地',
          iconfont: 'iconfont icon icon-mudedi'
        },{
          name: 'Consult',
          path: '/consult',
          icon: 'consult',
          title: '咨询',
          iconfont: 'iconfont icon icon-xiaoxi'
        },{
          name: 'Mine',
          path: '/mine',
          icon: 'mine',
          title: '我的',
          iconfont: 'iconfont icon icon-wode'
        },
      ]
    };
    this.goto = this.goto.bind(this)
  }
  goto(path){
    let {history} = this.props
    // console.log(path);
    history.push(path);
  }
  render() {
    // console.log(this.props)
    return (
      <div id="root">
        <div className="main">
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/bourn" component={Bourn}/>
            <Route path="/consult" component={Consult}/>
            <Route path="/mine" component={Mine}/>
            <Route path="/detail" component={detail}/>
            <Route path="/dateTrip" component={DateTrip}/>
            <Route path="/login" component={Login}/>
            <Route path="/list" component={List}/>
            <Route path="/404" render={()=><div>oh no 404</div>}/>
            <Redirect from="/" to="/home" exact/>
            <Redirect from="/*" to="/404"/>
          </Switch>
          
        </div>
        <div className="footer" >
          <ul>
            {
              this.state.nav.map(item=>{
                return <li key={item.name} onClick={this.goto.bind(this,item.path)} alt="">
                    <div className="f_li">
                      <i className={item.iconfont}></i>
                      <span>{item.title}</span>
                    </div>
                </li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

App = withRouter(App)

export default App

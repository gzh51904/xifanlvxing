import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { Switch,Route,NavLink,withRouter,Redirect } from 'react-router-dom'
import MyContext from './context'
// 引入组件路径
import Hot from './Hot'
import Meixi from './Meixi'
import Meid from './Meid'
import Jia from './Jia'
import Xia from './Xia'
import Riben from './Riben'
import Dny from './Dny'
import Ozh from './Ozh'
import SBzh from './SBzh'

class Index extends Component {
  constructor(){
    super();
    this.state = {
      navs:[
        {
          name: 'Hot',
          path: '/hot',
          title: '热门推荐',
        },{
          name: 'Meixi',
          path: '/meixi',
          title: '美西',
        },{
          name: 'Meid',
          path: '/meid',
          title: '美东',
        },{
          name: 'Jia',
          path: '/jia',
          title: '加拿大',
        },{
          name: 'Xia',
          path: '/xia',
          title: '夏威夷',
        },{
          name: 'Riben',
          path: '/riben',
          title: '日本',
        },{
          name: 'Dny',
          path: '/dny',
          title: '东南亚',
        },{
          name: 'Ozh',
          path: '/ozh',
          title: '欧洲',
        },{
          name: 'SBzh',
          path: '/sbzh',
          title: '澳新',
        }
      ],
      allData:[],
      
    }
    this.gotoHome = this.gotoHome.bind(this)
  }

  // 点击返回
  gotoHome(){
    // let {history} = this.props
    // console.log(this.props);
    let {history} = this.props
    history.push('/home')
  }

  
  // 移除main的overflow
  async componentWillMount(){
    
    setTimeout(function(){
      let main = document.querySelector('.main');
      if(this.props.match.path === '/bourn'){
        main.style.overflow = "visible"
      }
      
    }.bind(this))

    await axios.get('https://www.easy-mock.com/mock/5d3e90a9c07d166c1c4eed4a/example/query',
    {}).then((datas)=>{
        // console.log(datas.data.data);
        this.setState(
          this.state.allData = datas.data.data
        )
    }).catch(function(error){
        console.log(error);
    })

    // 可视区高度
    let height = document.documentElement.clientHeight;
    // 或许头部和底部的高度
    let top = document.querySelector(".bourn-top").clientHeight;
    let footer = document.querySelector('.footer').clientHeight;
    let bournF = document.querySelector(".bourn-footer-right");
    let scrolHeight = height - top -footer;
    bournF.style.height = scrolHeight + "px";
    
     // 第一个高亮
     let ul = document.querySelector('.bourn-footer-left-ul');
     let lis = ul.getElementsByTagName('li');
     lis[0].style.background = "#fff"

  }

  //移除main的overflow
  componentWillUnmount(){
    let main = document.querySelector('.main')
    main.style.overflow = "auto"
  }

  // 点击高亮函数
  activeLi(idx){
    let ul = document.querySelector('.bourn-footer-left-ul');
    let lis = ul.getElementsByTagName('li');
    for(var i = 0; i < lis.length; i++){
      lis[i].style.background = "#F1F1F1";
    }
    lis[idx].style.background = "#fff";
  }
  render() {

    let navs = this.state.navs;
    // let allData = this.state.allData;
    let {url,path} = this.props.match;

    return (
      <div className="bourn">
        <div className="bourn-top">
          <p onClick={this.gotoHome.bind(this)}>
            <i className="iconfont icon-fangxiang-xiangzuo"></i>
          </p>
          <div className="h_form bourn_form">
            <div className="h_center" style={{color: "#989898"}}>
                <i className="iconfont icon-sousuo" style={{fontWeight:"800",fontSize:"14px"}}></i>
                <span className="bourn-input" style={{fontSize: "14px"}}>城市/景点/产品/关键字</span>
            </div>
          </div> 
        </div>
        <div className="bourn-footer">
          <div className="bourn-footer-left">
            
              <ul className="bourn-footer-left-ul">
                {
                  navs.map((item,idx)=>{
                    return <NavLink 
                      to={url + item.path}
                      style={{color:'black'}}
                      key={idx}
                      onClick={this.activeLi.bind(this,idx)}
                    >
                      <li>
                        <span>
                          {item.title}
                        </span>
                      </li>
                    </NavLink>
                  })
                }
              </ul>
          </div>
          <div className="bourn-footer-right">
          <MyContext.Provider value={{data:this.state.allData}}>
            <Switch>
              <Route path={path + '/hot'} component={Hot} />
              <Route path={path + '/meixi'} component={Meixi} />
              <Route path={path + '/meid'} component={Meid}/>
              <Route path={path + '/jia'} component={Jia}/>
              <Route path={path + '/xia'} component={Xia}/>
              <Route path={path + '/riben'} component={Riben}/>
              <Route path={path + '/dny'} component={Dny}/>
              <Route path={path + '/ozh'} component={Ozh}/>
              <Route path={path + '/sbzh'} component={SBzh}/>
              <Redirect from={path} to={path + '/hot'} exact/>
            </Switch>
          </MyContext.Provider>  
          </div>
        </div>
      </div>
    )
  }
}


Index = withRouter(Index)

export default Index
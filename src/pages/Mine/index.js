import React, { Component } from 'react';

import "./index.scss";

// import Login from "../Login";

// import {Switch,Route} from "react-router-dom";

import {Icon} from "antd";

class Mine extends Component{
    constructor(){
        super();
        this.state={
            navs:[{
                name:'OrderForm',
                path:'/orderform',
                title:'全部订单',
                icon:'profile'
            },{
                name:'PayFor',
                path:'/payfor',
                title:'待支付',
                icon:'wallet'
            },{
                name:'OutGoing',
                path:'/outgoing',
                title:'待出行',
                icon:'close-square'
            },{
                name:'OutGo',
                path:'/outgo',
                title:'已出行',
                icon:'check-square'
            }],
            nav2:[{
                name:'Collection',
                path:'/collection',
                icon:'star',
                content:'我的收藏'
            },{
                name:'Visitor',
                path:'/visitor',
                icon:'star',
                content:'常用旅客'
            },{
                name:'Distribution',
                path:'/distribution',
                icon:'star',
                content:'我的分销'
            },{
                name:'Currency',
                path:'/currency',
                icon:'dollar',
                content:'切换货币'
            },{
                name:'Discounts',
                path:'/discounts',
                icon:'profile',
                content:'兑换优惠码'
            }],
            nav3:[{
                name:'Advise',
                path:'/advise',
                title:'意见反馈',
                icon:'file-exclamation',
                right:'>'
            },{
                name:'PayFor',
                path:'/payfor',
                title:'联系客服',
                icon:'customer-service'
            },{
                name:'Setting',
                path:'/setting',
                title:'设置',
                icon:'setting',
                right:'>'
            }]
        }

        //改变this的指向
        this.goLogin=this.goLogin.bind(this);
    }

    //点击跳转登录页面
    goLogin(e){
        console.log(e,this.props)
        let {history}=this.props;
        history.push('/login');
    }
    render(){
        let {navs,nav2,nav3}=this.state;
        return <div className="mine-box">
        <div className="content">
        <header className="header">
            <p><span onClick={this.goLogin}>登录/注册</span></p>
        </header>
        <main className="main_con">
            {/* 菜单1 */}
            <div className="m_menu1">
            {
                navs.map(item=>(
                <p key={item.name}>
                    <span style={{fontSize:'19px'}}><Icon type={item.icon} theme="twoTone" twoToneColor="#FFD700"/></span>
                    <span style={{fontSize:'12px'}}>{item.title}</span>
                </p>
                ))
            }
            </div>
            {/* 菜单2 */}
            <div className="m_menu2">
            {
                nav2.map(item=>(
                <p key={item.name}>
                    <span className="span1" style={{fontSize:'19px',height:'20px',width:'20px'}}><Icon type={item.icon} theme="twoTone" twoToneColor="#399EF6"/></span>
                    <span className="span2">{item.content}</span>
                    <span className="span3"></span>
                </p>
                ))
            }
            </div>
            {/* 菜单3 */}
            <div className="m_menu3">
            {
                nav3.map(item=>(
                <p key={item.name}>
                    <span className="span1" style={{fontSize:'19px',height:'20px',width:'20px'}}><Icon type={item.icon} theme="twoTone" twoToneColor="#399EF6"/></span>
                    <span className="span2">{item.title}</span>
                    <span className="span3">{item.right}</span>
                </p>
                ))
            }
            </div>
        </main>
        {/* <Switch>
            <Route path='./login' component={Login}></Route>
        </Switch> */}
    </div>
        </div>
    }
   
}

export default Mine;
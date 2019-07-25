import React,{Component} from 'react';

import './Login.scss';

import { Tabs, WhiteSpace } from 'antd-mobile';

class Login extends Component{
    constructor(){
        super();
        this.state={
            isstatus:false,
            tabs2:[
                { 
                    title: '普通登录' 
                },
                { 
                    title: '手机验证码登录'
                },
            ],
            tabs3:[
                { 
                    title: '手机号注册' 
                },
                { 
                    title: '邮箱注册'
                },
            ],
        }
        //改变this的指向
        this.change=this.change.bind(this);
    }

    change(){
       this.setState({
           isstatus:!this.state.isstatus
       })
    }

    tabClick(tabs,index){
        console.log(index);
    }
    
    render(){
        let {tabs2,tabs3}=this.state;
        return<div className="Login">
            <header>
                <div className="header">
                    <div className="left"><span>&lt;</span></div>
                    <div className="right"><span className="loginbtn" onClick={this.change}>{this.state.isstatus?'登录':'注册'}</span></div>
                </div>
            </header>
            <main>
                <div className="login_content" style={{display:this.state.isstatus?'none':'block'}}>
                    <h1 className="login_title">
                        稀饭旅游账号登录
                    </h1>
                    <div className="login_form">

                        <form>
                        <WhiteSpace />
                        <Tabs tabs={tabs2}
                        initialPage={0}
                        animated={false}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.title}</span>}
                        >
                        <div className="commonLogin" >
                           <input className="username" text="text" placeholder="用户名/邮箱"/>
                           <input className="password" text="text" placeholder="登录密码"/>
                           <div className="forget"><div className="findBtn"><span>忘记密码</span></div></div>
                        </div>
                        <div className="commonLogin">
                           <input className="logMobile" text="text" placeholder="手机号"/>
                           <input className="mobileCode" text="text" placeholder="验证码"/>
                           <div className="code"><div className="codeBtn"><span>获取验证码</span></div></div>
                        </div>
                        </Tabs>
                        <WhiteSpace />
                        <input type="button" className="loginBtn" value="登录"/>
                        </form>
                    </div>


                    <p className="xieyi">登录即代表您已同意我们的<span>&nbsp;服务协议</span></p>
                </div>
                <div className="login_content" style={{display:this.state.isstatus?'block':'none'}}>
                    <h1 className="login_title">
                        稀饭旅游账号注册
                    </h1>
                    <div className="login_form">

                        <form>
                        <WhiteSpace />
                        <Tabs tabs={tabs3}
                        initialPage={0}
                        animated={false}
                        tabBarPosition="top"
                        renderTab={tab => <span>{tab.title}</span>}
                        >
                        <div className="commonLogin" >
                           <input className="username" text="text" placeholder="手机号"/>
                           <input className="password" text="text" placeholder="登录密码"/>
                           <input className="mobileCode" text="text" placeholder="验证码"/>
                           {/* <div className="forget"><div className="findBtn"><span>忘记密码</span></div></div> */}
                           <div className="code"><div className="codeBtn"><span>获取验证码</span></div></div>
                        </div>
                        <div className="commonLogin">
                           <input className="logMobile" text="text" placeholder="邮箱"/>
                           <input className="password" text="text" placeholder="登录密码"/>
                           <input className="mobileCode" text="text" placeholder="验证码"/>
                           <div className="code"><div className="codeBtn"><span>获取验证码</span></div></div>
                        </div>
                        </Tabs>
                        <WhiteSpace />
                        <input type="button" className="loginBtn" value="注册"/>
                        </form>
                    </div>


                    <p className="xieyi"><input type="checkbox"/><span>我已经阅读并同意&nbsp;《服务协议》</span></p>
                </div>
                
            </main>
        </div>
    }
   
}

// const loginForm = Form.create({ name: 'normal_login' })(Login);


export default Login;
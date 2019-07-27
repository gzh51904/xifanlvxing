import React,{Component} from 'react';

import './Login.scss';

import { Tabs, WhiteSpace ,Toast} from 'antd-mobile';

class Login extends Component{
    constructor(){
        super();
        this.state={
            isstatus:false,
            isDisable:false,
            isChecked:true,
            time:60,
            username:'',
            password:'',
            number:'',
            codeContent:'获取验证码',
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
        this.checkedBtn=this.checkedBtn.bind(this);
        this.goBack=this.goBack.bind(this);
    }
   componentWillMount(){
       console.log(this.props.match)
       setTimeout(function(){
            const footer = document.querySelector('.footer')
            let {url}=this.props.match;
            if(url==='/login'){
                footer.style.display='none';
            }
       }.bind(this))
       
   }

   componentWillUnmount(){
       const footer=document.getElementsByClassName('footer')[0];
       footer.style.display='block';
   }

   goBack(){
       window.history.go(-1);
   }


    //登录与注册的切换
    change(){
       this.setState({
           isstatus:!this.state.isstatus
       })
    }

    //复选框
    checkedBtn(){
       
        this.setState({
            isChecked:!this.state.isChecked
        })
        console.log(this.state.isChecked);
    }

    handleReg(e){
        this.setState({
            number:e.target.value
        })
        console.log(this.state.number)
    }

    // num(){
    //     let {number}=this.state;
    //     if(number===''){
    //         console.log('不能为空')
    //     }
    // }

    showToastNoMask() {
        // this.num();
        Toast.info('不能为空', 2, null, false);
    }


          
    render(){
        let timer;
        let time=this.state.time;
        const getCode=()=>{
            if(time>0){
                time=time-1;
                this.setState({
                    time:time,
                    codeContent:time+'s'
                })
                // console.log(this.state.time);
            }else{
                clearInterval(timer);
                this.setState({
                    isDisable:false,
                    time:60,
                    codeContent:'获取验证码'
                })
            }
        }
        //点击获取验证码,并倒计时
        const sendCode=()=>{
            this.setState({
                isDisable:true,
                codeContent:'60s'
            })
            timer=setInterval(getCode,1000)
        }
        
        let {tabs2,tabs3}=this.state;
        return<div className="Login">
            <header>
                <div className="header">
                    <div className="left"><span onClick={this.goBack}>&lt;</span></div>
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
                           <div className="code"><div className="codeBtn"><span>{this.state.codeContent}</span></div></div>
                        </div>
                        </Tabs>
                        <WhiteSpace />
                        <input type="submit" className="loginBtn" value="登录"/>
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
                           <input className="username" value={this.state.number} onChange={this.handleReg.bind(this)} text="text" placeholder="手机号"/>
                           <input className="password" text="text" placeholder="登录密码"/>
                           <input className="mobileCode" text="text" placeholder="验证码"/>
                           {/* <div className="forget"><div className="findBtn"><span>忘记密码</span></div></div> */}
                           <div className="code"><div className="codeBtn"><span><button onClick={sendCode} disabled={this.state.isDisable}>{this.state.codeContent}</button></span></div></div>
                        </div>
                        <div className="commonLogin">
                           <input className="logMobile"  text="text" placeholder="邮箱"/>
                           <input className="password" text="text" placeholder="登录密码"/>
                           <input className="mobileCode" text="text" placeholder="验证码"/>
                           <div className="code"><div className="codeBtn"><span>获取验证码</span></div></div>
                        </div>
                        </Tabs>
                        <WhiteSpace />
                        <input type="button" className="loginBtn" onClick={this.showToastNoMask} value="注册"/>
                        </form>
                    </div>


                    <p className="xieyi"><input type="checkbox" onChange={this.checkedBtn} checked={this.state.isChecked}/><span>我已经阅读并同意&nbsp;《服务协议》</span></p>
                </div>
                
            </main>
        </div>
    }
   
}

// const loginForm = Form.create({ name: 'normal_login' })(Login);


export default Login;
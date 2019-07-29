import React, {Component} from 'react';

import './Login.scss';

import axios from 'axios';

import {Tabs, WhiteSpace, Toast} from 'antd-mobile';

// import { thisExpression } from '@babel/types';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            isstatus: false,
            isDisable: false,
            isChecked: true,
            time: 60,
            itemr:'',
            username: '',
            password: '',
            number: '',
            regpwd: '',
            codeContent: '获取验证码',
            tabs2: [
                {
                    title: '普通登录'
                },
                {
                    title: '手机验证码登录'
                },
            ],
            tabs3: [
                {
                    title: '手机号注册'
                },
                {
                    title: '邮箱注册'
                },
            ],
        }
        //改变this的指向
        this.change = this.change.bind(this);
        this.checkedBtn = this.checkedBtn.bind(this);
        this.goBack = this.goBack.bind(this);
        this.xxx = this.xxx.bind(this)
    }

    componentWillMount() {
        console.log(this.props.match)
        setTimeout(function () {
            const footer = document.querySelector('.footer')
            let {url} = this.props.match;
            if (url === '/login') {
                footer.style.display = 'none';
            }
        }.bind(this))

    }

    componentWillUnmount() {
        const footer = document.getElementsByClassName('footer')[0];
        footer.style.display = 'block';
    }

    goBack() {
        window.history.go(-1);
    }


    //登录与注册的切换
    change() {
        this.setState({
            isstatus: !this.state.isstatus
        })
    }

    //复选框
    checkedBtn() {

        this.setState({
            isChecked: !this.state.isChecked
        })
        console.log(this.state.isChecked);
    }

    handleReg(e) {
        this.setState({
            number: e.target.value
        })
    }

    handleRegpwd(e) {
        this.setState({
            regpwd: e.target.value
        })
    }

    handleLogin(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleLogPwd(e) {
        this.setState({
            password: e.target.value
        })
    }

    login() {
        let {username, password} = this.state;
        let isok = false;
        let isok2 = false;

        if (password === '') {
            isok = false
        } else {
            isok = true
        }

        if (username === '') {
            isok2 = false
        } else {
            isok2 = true
        }
        console.log(isok, isok2);
        if (isok && isok2) {
            if (localStorage.getItem('username')) {
                Toast.info('请先退出账号！', 2, null, false);
            } else {
                // Toast.info('登录成功', 2, null, false);
                axios.get('http://localhost:4000/login', {
                    params: {
                        username,
                        password
                    }
                }).then(({data}) => {
                    // console.log(data)
                    if (data.code === 250) {
                        Toast.info('用户名或密码错误！', 2, null, false);
                    } else {
                        localStorage.setItem('username', username);
                        this.props.history.replace('/home');
                    }
                })
            }

        } else {
            Toast.info('请完善信息', 2, null, false);
        }

    }

    // num(){
    //     let {number}=this.state;
    //     if(number===''){
    //         console.log('不能为空')
    //     }
    // }

    showToastNoMask = () => {
        let {number, regpwd} = this.state;
        if (regpwd) {
            console.log(2)
            let xnumber = /^\w{6}$/;
            if (!xnumber.test(regpwd)) {
                Toast.info('密码不小于6位的字母、数字和下划线', 2, null, false);
            }
        } else {
            Toast.info('请填密码', 2, null, false);
        }

        if (number) {
            console.log(1)
            let xnumber = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
            if (!xnumber.test(number)) {
                Toast.info('手机格式不符', 2, null, false);
            }
        } else {
            Toast.info('请填号码', 2, null, false);
        }


    }
    getCode(e){
        // for (var i = 0; i <1; i++) {
            e.preventDefault();
            e.stopPropagation()
        // }
        console.log(e)
    }
    xxx(e){
        this.setState({
            number:e.target.value
        })

    }

    render() {
        // console.log(this.state.yz)


        let {tabs2, tabs3} = this.state;
        return <div className="Login">
            <header>
                <div className="header">
                    <div className="left"><span onClick={this.goBack}>&lt;</span></div>
                    <div className="right"><span className="loginbtn"
                                                 onClick={this.change}>{this.state.isstatus ? '登录' : '注册'}</span></div>
                </div>
            </header>
            <main>
                <div className="login_content" style={{display: this.state.isstatus ? 'none' : 'block'}}>
                    <h1 className="login_title">
                        稀饭旅游账号登录
                    </h1>
                    <div className="login_form">

                        <form>
                            <WhiteSpace/>
                            <Tabs tabs={tabs2}
                                  initialPage={0}
                                  tabBarPosition="top"
                                  renderTab={tab => <span>{tab.title}</span>}
                            >
                                <div className="commonLogin">
                                    <input className="username" value={this.state.username}
                                           onChange={this.handleLogin.bind(this)} type="text" placeholder="用户名/邮箱"/>
                                    <input className="password" value={this.state.password}
                                           onChange={this.handleLogPwd.bind(this)} type="password" placeholder="登录密码"/>
                                    <div className="forget">
                                        <div className="findBtn"><span>忘记密码</span></div>
                                    </div>
                                </div>
                                <div className="commonLogin">
                                    <input className="logMobile" type="text" placeholder="手机号"/>
                                    <input className="mobileCode" type="text" placeholder="验证码"/>
                                    <div className="code">
                                        <div className="codeBtn"><span>{this.state.codeContent}</span></div>
                                    </div>
                                </div>
                            </Tabs>
                            <WhiteSpace/>
                            <input type="button" onClick={this.login.bind(this)} className="loginBtn" value="登录"/>
                        </form>
                    </div>


                    <p className="xieyi">登录即代表您已同意我们的<span>&nbsp;服务协议</span></p>
                </div>
                <div className="login_content" style={{display: this.state.isstatus ? 'block' : 'none'}}>
                    <h1 className="login_title">
                        稀饭旅游账号注册
                    </h1>
                    <div className="login_form">

                        <form>

                            <Tabs tabs={tabs3}
                                  initialPage={0}
                                  animated={false}
                                  tabBarPosition="top"
                                  renderTab={tab => <span>{tab.title}</span>}
                            >
                                <div className="commonLogin">
                                    <input className="username" value={this.state.number}
                                           onChange={this.xxx.bind(this)} type="text" placeholder="手机号"/>
                                    <input className="password" value={this.state.regpwd}
                                           onChange={this.handleRegpwd.bind(this)} type="text" placeholder="密码"/>
                                    <input className="mobileCode" type="text" placeholder="验证码"/>
                                    {/* <div className="forget"><div className="findBtn"><span>忘记密码</span></div></div> */}
                                    <div className="code">
                                        <div className="codeBtn">
                                            <span>
                                                <button onClick={this.getCode.bind(this)}>
                                                    {this.state.codeContent}
                                                </button>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="commonLogin">
                                    <input className="logMobile" type="text" placeholder="邮箱"/>
                                    <input className="password" type="password" placeholder="密码"/>
                                    <input className="mobileCode" type="text" placeholder="验证码"/>
                                    <div className="code">
                                        <div className="codeBtn"><span>获取验证码</span></div>
                                    </div>
                                </div>
                            </Tabs>

                            <input type="button" className="loginBtn" onClick={this.showToastNoMask} value="注册"/>
                        </form>
                    </div>


                    <p className="xieyi"><input type="checkbox" onChange={this.checkedBtn}
                                                checked={this.state.isChecked}/><span>我已经阅读并同意&nbsp;《服务协议》</span></p>
                </div>

            </main>
        </div>
    }

}

// const loginForm = Form.create({ name: 'normal_login' })(Login);


export default Login;
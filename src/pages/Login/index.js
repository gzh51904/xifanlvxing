import React,{Component} from 'react';

import './Login.scss';

import { Tabs,Form, Icon, Input, Button} from 'antd';

const { TabPane } = Tabs;

class Login extends Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      };
    render(){
        const { getFieldDecorator } = this.props.form;
        return<div className="Login">
            <header>
                <div className="header">
                    <div className="left"><span>&lt;</span></div>
                    <div className="right"><span className="loginbtn">注册</span></div>
                </div>
            </header>
            <main>
                <div className="login_content">
                    <h1 className="login_title">
                        稀饭旅游账号登录
                    </h1>
                    <div className="login_form">
                        <div className="nav_tab">
                        <Tabs defaultActiveKey="1">
                           
                            <TabPane tab="普通登录" key="1">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="用户名/邮箱"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: 'Please input your Password!' }],
                                })(
                                    <Input.Password
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="登录密码"
                                    />,
                                )}
                                </Form.Item>
                                <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    登录
                                </Button>
                                </Form.Item>
                                </Form>
                                
                            </TabPane>
                            <TabPane tab="手机验证码登录" key="2">
                            <div>

                            </div>
                            </TabPane>
                            
                            
                        </Tabs>
                        </div>
                    </div>

                    <p className="xieyi">登录即代表您已同意我们的<span>服务协议</span></p>
                </div>
                
            </main>
        </div>
    }
   
}

const loginForm = Form.create({ name: 'normal_login' })(Login);


export default loginForm;
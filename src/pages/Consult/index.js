import React,{ Component } from 'react'

import '../../iconfont/iconfont.css'

import imgurl from './head@2x.png'

import './index.scss'

class Consult extends Component{
  componentWillMount(){
    console.log(this.props.match)
    setTimeout(function(){
         const footer = document.querySelector('.footer')
         let {url}=this.props.match;
         if(url==='/consult'){
             footer.style.display='none';
         }
    }.bind(this))

    setTimeout(function(){
      let main = document.querySelector('.main');
      if(this.props.match.path === '/consult'){
        main.style.overflow = "visible"
      }
      
    }.bind(this))
    
}

componentWillUnmount(){
    const footer=document.getElementsByClassName('footer')[0];
    footer.style.display='block';

    let main = document.querySelector('.main')
    main.style.overflow = "auto"
}

goBack(){
  window.history.go(-1);
}

  constructor(){
    super();
    this.state={
      // imgurl:require('./head@2x.png')
    }
    this.goBack=this.goBack.bind(this);
  }
    render(){
      return<div className="content">
        <header>
        <p className="left" onClick={this.goBack}>&lt;</p>
        <p className="con"><span >客服咨询</span></p>
        </header>
        <main className='m'>
          <div id="innerWrap">
            <div className="pc-service">
              <div className="pc-service-left" id="obj_other">
              <img width="34px" src={imgurl} alt=""/>
              </div>
              <div className="pc-service-right">
              <div className="pc-service-info font14">
                  <div style={{overflow:'hidden'}}>
                    <p><span><span>欢迎您来到稀饭旅行网！稀饭旅行提供<strong>目的地参团／定制出游／国际邮轮／自驾包车／签证机票预订服务</strong>。</span></span></p>
                    <p><span style={{color:'#E53333',fontSize:'16px'}}><strong>留联系方式+号码，领取优惠码</strong></span></p>
                    <p style={{fontFamily:'sans-serif'}}><strong></strong></p>
                    <p><strong>
                      <span style={{fontFamily:'sans-serif',color:'#FF0000'}}>
                        <span style={{color:'#000000'}}>中国</span>
                        <span style={{color:'#000000'}}>电话：<strong>400-118-1388</strong>&nbsp;&nbsp;</span>
                      </span>
                      </strong></p>
                      <p>
                        <strong>
                          <span style={{fontFamily:'sans-serif',color:'#FF0000'}}>
                            <span style={{color:'#000000'}}>美国电话：<span style={{fontFamily:'&quot',fontSize:'14px'}}><strong>（001）832-886-1525</strong></span></span>
                          </span><strong></strong>
                          </strong>
                      </p>
                    <span style={{fontFamily:'sans-serif',color:'#FF0000'}}></span>
                  </div> 
                </div>
              </div>
            </div>
            <div className="pc-service">
              <div className="pc-service-left" id="obj_other">
              <img width="34px" src={imgurl} alt=""/>
              </div>
              <div className="pc-service-right">
              <div className="pc-service-info font14">
                  <div style={{overflow:'hidden'}}>
                  我是您的专属旅行顾问，请问有什么可以为您服务的呢？（我是您的專屬旅行顧問，請問有什麼可以為您服務的呢）
                  </div> 
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="foot">
          <div className="foot-left">
            <span className="icon iconfont icon-xiaolian"></span>
            <span className="icon iconfont icon-tianjia"></span>
          </div>
          <div className="foot-right">
            <div className="txt">
              <textarea className=" font14" id="textarea" style={{border:'1px #DDE5ED solid'}} placeholder="请输入..."></textarea>
              <span id="btnSend" className="font14">发送</span>
            </div>
          </div>
        </footer>
      </div>
    }
}

export default Consult;
import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class index extends Component {
  // 移除main的overflow
  async componentWillMount(){
    console.log(222);
    
    setTimeout(function(){
      let main = document.querySelector('.main');
      if(this.props.match.path === '/bourn'){
        main.style.overflow = "visible"
      }
      
    }.bind(this))

  }
  
  async componentDidMount(){
    console.log(111)
    
    await axios.get('/xifan/api/destination?',{
        params:{
          t:1564323635
        }
    }).then((datas)=>{
        console.log(datas);
        // this.setState(
        //     this.state = { lazyDatas : datas.data.data}
        // )
    }).catch(function(error){
        console.log(error);
    })
  }

  //移除main的overflow
  componentWillUnmount(){
    let main = document.querySelector('.main')
    
    main.style.overflow = "auto"
  }
  render() {
    return (
      <div className="bourn">
        <div className="bourn-top">
          <p>
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
            <ul>
              <li></li>
            </ul>
          </div>
          <div className="bourn-footer-right"></div>
        </div>
      </div>
    )
  }
}

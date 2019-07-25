import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile'
import axios from 'axios'
import './index.css'

export default class index extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            lazyDatas:[],
            imgHeight: 176,
            // 目的地数据
            bourns:[
            {
                name:'美国西部',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/_KMHLpS45kgRFhmMU1rXPgvcfE4.jpg'
            },{
                name:'美国东部',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/no4AHPnG1fzDnbgZomxg2ysobVM.jpg'
            },{
                name:'加拿大',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/DxI9s0Q5_0r_BYNrdbk6Zf-OvuI.jpg'
            },{
                name:'夏威夷',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/0Vjxz9AvguP1E-z0A6F9SWBjB1Q.jpg'
            },{
                name:'日本关东',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/FBbOVlJMwOTv--dojEsDb9mN_gE.jpg'
            },{
                name:'日本近畿',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/gH4_92OqrpmeXlsrYPS6p5BYyCk.jpg'
            },{
                name:'澳大利亚',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/754h0Rfh3ECsZs16BDrV131OBy4.jpg'
            },{
                name:'新西兰',
                imgurl:'https://assets.tourscool.com/uploads/inn/2019/02/19/952/BgR1vC7Ob9bCz__wCw7OFrCkrpM.jpg'
            }
        ]
        }

        // this.scrollFn = this.scrollFn.bind(this);
    }
    //   请求数据
    async componentWillMount(){
        await axios.get('https://m.tourscool.com/api/index/topsales',{
            params:{
                t: 1564066256,
                page: 1
            }
        }).then((datas)=>{
            console.log(datas.data.data);
            this.setState(
                this.state = { lazyDatas : datas.data.data}
            )
        }).catch(function(error){
            console.log(error);
        })
    }

      
    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
        // 轮播图数据t图片
          this.setState({
            data: [
            'http://assets.tourscool.com/uploads/inn/2019/07/17/952/_lL5uBjpK8N7ZBbH_tDUvuW2DCs.jpg', 
            'http://assets.tourscool.com/uploads/inn/2019/07/06/952/-f-jYoP_FQZ8k29Y2_pB-knFM3g.jpg', 
            'http://assets.tourscool.com/uploads/inn/2019/06/05/952/QlXllmJogtTBXsmBv7nm35mJsgs.jpg', 
            'https://assets.tourscool.com/uploads/inn/2019/05/16/952/Kez5i5WtxeV6wH39aNyogp7DGyo.jpg', 
            'http://assets.tourscool.com/uploads/inn/2019/06/28/952/MnmHH-qiqHohqkX7Wurs0rak2O4.jpg', 
            'http://assets.tourscool.com/uploads/inn/2019/05/23/952/PvOp8X5Y_G5b2k-VsGiw39o7SEA.jpg', 
            'https://assets.tourscool.com/uploads/inn/2019/06/21/952/UawuuEUEAJWkD3NpxajHmooIM0k.jpg', 
            'https://assets.tourscool.com/uploads/inn/2019/03/05/952/jDk1XNjBDt56YS-xCLd96C0oX-M.jpg'],
          });
        }, 100);
        // let myHome = this.refs.myHome;
        // myHome.addEventListener("scroll", this.scrollFn, true);

        
    }

    // scrollFn(){
    //     let myHome = this.refs.myHome;
    //     console.log(myHome);
    //     console.log(myHome.scrollTop);
    // }
    
    render() {
        return (
          <div ref="myHome" className="home">
            <div className="h_top">
                <WingBlank className="h_banner">
                    <Carousel
                    autoplay={true}
                    infinite
                    dotStyle={{
                        color: "#58bc58"
                    }}
                    dotActiveStyle={{
                        color: 'red',
                        width: "20xp"
                    }}
                    >
                    {this.state.data.map(val => (
                        <a
                        key={val}
                        href="http://www.alipay.com"
                        style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                        <img
                            src={val}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                    </Carousel>
                </WingBlank>
                <div className="h_input">
                    <div className="h_form">
                        <div className="h_center" style={{color: "#989898"}}>
                            <i className="iconfont icon-sousuo"></i>
                            <span style={{fontSize: "11px"}}>目的地/关键词</span>
                        </div>
                    </div> 
                    <p>
                        <i className="iconfont icon-dianhua" style={{
                            fontSize: "30px",
                            fontWeight: "600",
                            color: "#F9F9F9",
                            marginLeft: "-10px"
                        }}></i>
                    </p>       
                </div>
            </div>
            <div className="h_ul">
                <ul>
                    <li>
                        <i>
                            <img  src={require('../../img/1.png')} alt=""/>
                        </i>
                        <span>
                            精品小团
                        </span>
                    </li>
                    <li>
                        <i>
                            <img  src={require('../../img/2.png')} alt=""/>
                        </i>
                        <span>
                            当地玩乐
                        </span>
                    </li>
                    <li>
                        <i>
                            <img  src={require('../../img/3.png')} alt=""/>
                        </i>
                        <span>
                            当地跟团
                        </span>
                    </li>
                    <li>
                        <i>
                            <img  src={require('../../img/4.png')} alt=""/>
                        </i>
                        <span>
                            个性定制
                        </span>
                    </li>
                    <li>
                        <i>
                            <img  src={require('../../img/5.jpg')} alt=""/>
                        </i>
                        <span>
                            邮轮
                        </span>
                    </li>
                </ul>
                <div className="h_ulf">
                        
                </div>
            </div>
            <div className="h_bourn">
                <div className="h_bourn_c">
                    <div className="h_bourn_t">
                        <h2>热门目的地</h2>
                        <p>查看全部 ></p>
                    </div>
                    <div className="h_bourn_b">
                        <ul>
                            {
                                this.state.bourns.map(item=>{
                                    return <li key={item.name}>
                                        <img src={item.imgurl} alt=""/>
                                        <span>{item.name}</span>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="kongBai"></div>
            <div className="h_lazy">
                <div className="h_lists">
                    <h3>精选商品</h3>
                    <div ref="listLazy" className="list_lazy">
                        <ul>
                            {
                                // console.log(this.state.lazyDatas)
                                
                                this.state.lazyDatas.map((item,idx)=>{
                                    return <li key={idx}>
                                        <img src={item.image} alt=""/>
                                        <div className="list_t">
                                            {item.name}
                                        </div>
                                        <p><span>热门</span></p>
                                        <div className="list_b">
                                            <span>{item.default_price}</span>
                                            <span>/ 起</span>
                                        </div>
                                    </li>
                                })
                                
                            }
                            {/* <li>
                                        <img src="https://img.tourscool.com/images/product/5c98c5fdc5ac9.jpg/600x338" alt=""/>
                                        <div className="list_t">
                                        (5天)【美西风光】美国洛杉矶+拉斯维加斯+大峡谷跟团游▪精选舒适酒店+饱览西部风光+资深品质巴士接送+主题项目10选1
                                        </div>
                                        <p><span>热门</span></p>
                                        <div className="list_b">
                                            <span>￥1155</span>
                                            <span>/ 起</span>
                                        </div>
                                    </li>
                                    <li>
                                        <img src="https://img.tourscool.com/images/product/5c98c5fdc5ac9.jpg/600x338" alt=""/>
                                        <div className="list_t">
                                        (5天)【美西风光】美国洛杉矶+拉斯维加斯+大峡谷跟团游▪精选舒适酒店+饱览西部风光+资深品质巴士接送+主题项目10选1
                                        </div>
                                        <p><span>热门</span></p>
                                        <div className="list_b">
                                            <span>￥1155</span>
                                            <span>/ 起</span>
                                        </div>
                                    </li> */}
                            
                        </ul>
                    </div>
                </div>
                
            </div>
          </div>
        );
    }
}

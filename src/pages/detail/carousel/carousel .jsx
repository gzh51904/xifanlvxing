//轮播图

import React from 'react'
import {Carousel, WingBlank} from 'antd-mobile';
import './carousel.scss'

class carousel extends React.Component {
    constructor(){
        super()
        this.state = {
            img: [1,2,3],
            title:'',
            price:'',
            imgHeight: 50,
            nowselect: '0',
        }
        // console.log(this.state.header)
    }
    componentWillReceiveProps({data}, nextContext) {
        //拿到父组件传来的数据
        // setTimeout(function () {
        this.setState({
            img:data.product.images,
            title:data.product.name,
            price:data.product.default_price,
        })
        // })
    }

    componentDidMount() {
        // simulate img loading



    }

    render() {
        return (
            <div>
                <meta name="referrer" content="no-referrer" />
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        // beforeChange={(from, to) => console.log(this)}
                        afterChange={index => this.setState({nowselect: index})}
                    >
                        {this.state.img.map(val => (

                            <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{display: 'inline-block', width: '100%', height: '170px'}}
                            >
                                <img
                                    id={val}
                                    // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                                    src={val}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: "217px",
                                        verticalAlign: 'top',
                                        backgroundSize: 'cover',
                                        position: "relative",
                                        top: "-46px"
                                    }}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 'auto'});
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                    {/*图片序号*/}
                    <div className="pages">{this.state.nowselect - 0 + 1}/{this.state.img.length}</div>

                </WingBlank>
                <div className="detail_content"><p>{this.state.title}</p>
                    <span>{this.state.price}<em>{this.state.price?'起':''}</em></span></div>
            </div>
        );
    }
}

export default carousel
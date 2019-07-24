import React from 'react'
import {Carousel, WingBlank} from 'antd-mobile';
import './carousel.scss'

class carousel extends React.Component {
    state = {
        data: ['1', '2', '3'],
        imgHeight: 50,
        nowselect: '0'
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['https://img.tourscool.com/images/product/5c861d39491db.jpg/600x338', 'https://img.tourscool.com/images/product/5c861d6d1c837.jpg/600x338', 'https://img.tourscool.com/images/product/5c861db91e9ec.jpg', 'https://img.tourscool.com/images/product/5c861e105769a.jpg', 'https://img.tourscool.com/images/product/5c861e4d19ff9.jpg/600x338', 'https://img.tourscool.com/images/product/5c861ea80b3a2.jpg'],
            });
        }, 100);
    }

    render() {
        return (
            <div>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        // afterChange={index => console.log('slide to', index)}
                        // beforeChange={(from, to) => console.log(this)}
                        afterChange={index => this.setState({nowselect: index})}
                    >
                        {this.state.data.map(val => (

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
                    <div className="pages">{this.state.nowselect - 0 + 1}/{this.state.data.length}</div>

                </WingBlank>
                <div className="detail_content"><p>(5天)【经典游】日本大阪+京都+神户+奈良5日游 清水寺+伏见稻荷大社+奈良公园+有马温泉+六甲山夜景</p>
                    <span>￥1,999.00<em>起</em></span></div>
            </div>
        );
    }
}

export default carousel
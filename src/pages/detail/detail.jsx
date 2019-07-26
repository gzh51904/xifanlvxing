import React from 'react'
import {NavBar, Icon,Popover} from 'antd-mobile';

import Carousel from './carousel/carousel '
import Schedule from './schedule/schedule'
import Group from './group/group'
import Footer from './footer/footer'
import Description from "./description/description";
import Outline from "./outline/outline";
import SchDetail from  './sch_detail/sch_detail'
import Price from  './pricedetail/price'
import './detail.scss'
const Item = Popover.Item;


class detail extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: true,
            selected: '',
            y:''
        };

    }
    componentDidMount() {
        //固定
        setTimeout(function f(){
            //屏幕高度
            let ih = window.innerHeight
            console.log(ih)
            let getnav = document.getElementById('hhh');
            let header = document.getElementsByTagName('header')[0];
            let sy = getnav.offsetTop - header.offsetHeight;

            let price_detail = document.getElementById('price_detail');
            let pricey = price_detail.offsetTop -ih
            let tabs = getnav.children[0].children

            let notice_bottom = document.getElementById('notice_bottom');
            let noticey = notice_bottom.offsetTop - ih

            //显示空盒子防止固定定位屏幕抖动
            let preout = document.getElementById('preout')
            //滚动条操作
            window.onscroll = function () {
                if (parseInt(this.scrollY)>=sy){
                    getnav.setAttribute('class','fixed')
                    preout.style.display = 'block'
                }else{
                    getnav.setAttribute('class','')
                    preout.style.display = 'none'
                }
                if(parseInt(this.scrollY)>=pricey){
                    pc()
                    tabs[1].setAttribute('class','active');
                }else{
                    pc()
                    tabs[0].setAttribute('class','active');
                }
                if (parseInt(this.scrollY)>=noticey) {
                    pc()
                    tabs[2].setAttribute('class','active');
                }
            }
            function pc() {
                for(var i = 0;i < tabs.length; i++) {
                    tabs[i].setAttribute('class','');
                }
            }
        })

    }
    componentWillUpdate(nextProps, nextState, nextContext) {

    }

    onSelect = (opt) => {
        // console.log(opt.props.value);
        this.setState({
            visible: false,
            selected: opt.props.value,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    render() {
        return (
            <div id="detail">
                {/*头部*/}
                <header className="detail_header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => console.log('onLeftClick')}
                        rightContent={[

                        ]}
                        >
                        <Popover
                            // overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            // visible={this.state.visible}
                            overlay={[
                                (<div key="3" className="sanjiaoxing"></div>),
                                (<Item key="4" value="scan"  data-seed="logId"><img src="img/dhome.png" alt=""/>首页</Item>),
                                (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }}><img src="img/dloc.png" alt=""/>目的地</Item>),
                                (<Item key="6" value="button ct" >
                                    <span style={{ marginRight: 5 }}><img src="img/duser.png" alt=""/>个人中心</span>
                                </Item>),
                                (<Item key="7" value="special"  style={{ whiteSpace: 'nowrap' }}><img src="img/dsc.png" alt=""/>我的收藏</Item>)
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon key="1" type="ellipsis" className="right_more"/>
                            </div>
                        </Popover>
                        <div className="title_content" key="124">(5天)【经典游】日本大阪+京都+神户+奈良5日游 清水寺+伏见稻荷大社+奈良公园+有马温泉+六甲山夜景</div>
                    </NavBar>
                </header>
                {/*内容*/}
                <div className="detail_con">
                    {/*    轮播图*/}
                    <Carousel></Carousel>
                    {/*    热门行程*/}
                    <Schedule></Schedule>
                    {/*    团购*/}
                    <Group/>
                    {/*    推荐*/}
                    <Description/>
                    {/*    行程概要*/}
                    <Outline/>
                    {/*    行程详情*/}
                    <SchDetail/>
                    {/*    费用明细*/}
                    <Price/>
                </div>
                {/*    底部*/}
                <Footer></Footer>
            </div>
        );
    }
}

export default detail
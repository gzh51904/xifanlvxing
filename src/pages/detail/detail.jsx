import React from 'react'
import {NavBar, Icon} from 'antd-mobile';

import Carousel from './carousel/carousel '
import Schedule from './schedule/schedule'
import Group from './group/group'
import Footer from './footer/footer'
import Description from "./description/description";
import Outline from "./outline/outline";
import './detail.scss'


class detail extends React.Component {
    constructor() {
        super()
    }

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
                            <Icon key="1" type="ellipsis" className="right_more"/>,
                        ]}
                    >
                        <div className="title_content">(5天)【经典游】日本大阪+京都+神户+奈良5日游 清水寺+伏见稻荷大社+奈良公园+有马温泉+六甲山夜景</div>
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
                </div>
                {/*    底部*/}
                <Footer></Footer>
            </div>
        );
    }
}

export default detail
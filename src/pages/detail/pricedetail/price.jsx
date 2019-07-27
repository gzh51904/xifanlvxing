//行程概要

import React from 'react'
import './price.scss'
import { Accordion, List } from 'antd-mobile';
class  price extends React.Component{
    render() {
        return <div>
            <div className="nosatisfied">
                <span>行程不满意？您还可以找</span>
                <span>稀饭旅行定制师</span>
            </div>
            <div className="price_detail">
                <div className="title" id="price_detail">费用明细</div>
                <div className="price_sm">
                    <h3>团费说明</h3>
                    <div className="home_price">
                        <div className="item">
                            <p className="t">单人一间</p>
                            <p className="b">￥2,199.00/人</p>
                        </div>
                        <div className="item">
                            <p className="t">单人一间</p>
                            <p className="b">￥2,199.00/人</p>
                        </div>
                        <div className="item">
                            <p className="t">单人一间</p>
                            <p className="b">￥2,199.00/人</p>
                        </div>
                    </div>
                </div>
                <div className="price_sm">
                    <h3>价格说明</h3>
                    <div className="price_sm_info">
                        *儿童价为6岁以下儿童与2成人同住，不占床的价格，若儿童占床则与成人同价
                    </div>
                </div>
                <div className="price_sm">
                    <h3>费用包含</h3>
                    <div className="price_sm_info">
                        1）交通费用：专业旅游用车；<br />2）住宿：行程所列酒店住宿费用（酒店默认安排标准2人间）；<br />3）导游：中文导游兼职司机服务；
                    </div>
                </div>
                {/*<div className="pull_show"></div>*/}
                <Accordion defaultActiveKey="-1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <div className="notice_bottom price_detail" id="notice_bottom">
                <Accordion defaultActiveKey="-1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con">1）当地参加的自费项目以及以上【费用包含】中不包含的其它项目；<br />2）行程中所列自理餐；<br />3）其它个人消费；<br />4）自费项目：<br />*清水寺参拜费：成人400日元，中小学生200日元；<br />*奈良公园鹿仙贝：参考价150日元；<br />*金汤：成人650日元，小学生290日元；<br />*银汤：成人550日元，小学生290日元；<br />*金汤银汤两馆联票：850日元；</div>
                    </Accordion.Panel>
                </Accordion>
            </div>
        </div>
    }
}

export default price;

import React from 'react'
import './List.scss'
import {Icon, NavBar} from "antd-mobile";

class List extends React.Component{
    constructor(){
        super()
        this.state={
            num:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            navs:['稀饭推荐','当地跟团','当地玩乐','邮轮','精品小团'],
            select:'0'
        }
        this.select = this.select.bind(this)
    }
    select(index){
        this.setState({
            select:index
        })
    }
    render() {
        return <div className="list-box">
            {/*头部*/}
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >
                    <input type="text" placeholder="邮轮" className="search-box"/>
                </NavBar>
            </div>
            {/*   分类*/}
            <div className="tabs">
                <ul className="navs">
                    {
                        this.state.navs.map((item,index)=>{
                            return <li key={item} className={index==this.state.select?'active':''} onClick={this.select.bind(this,index)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        {/*    列表*/}
            <div>
                <ul>
                    {
                        this.state.num.map(item=>{
                            return <li className="list" key={Date.now()*Math.random()}>
                                <div className="imgbox">
                                    <img src="img/list.png" alt=""/>
                                </div>
                                <div className="content">
                                    <div className="title">
                                        （6天）迈阿密+巴哈马自由港享受之旅【迈阿密、沼泽公园、南海滩、西礁岛、七英里跨海大桥、海明威故居、西棕榈滩、邮轮码头】
                                    </div>
                                    <div className="tag">
                                        <ul>
                                            <li className="taglist">热门推荐</li>
                                            <li className="taglist">最受欢迎</li>
                                            <li className="taglist">畅销行程</li>
                                        </ul>
                                    </div>
                                    <div className="price">
                                        <em>￥4,222</em><span>/起</span>
                                    </div>
                                    <div className="people">
                                        <span>5.0分</span>
                                        <span>0人出行</span>
                                    </div>
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    }
}
export default List
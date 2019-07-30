
import React from 'react'
import './List.scss'
import {Icon, NavBar} from "antd-mobile";
import $axios from 'axios'

class List extends React.Component{
    constructor(){
        super()
        this.state={
            data:'',
            num:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            navs:['稀饭推荐','当地跟团','当地玩乐','邮轮','精品小团'],
            select:'0'
        }
        this.select = this.select.bind(this)
        this.gotoDetail = this.gotoDetail.bind(this)
    }
    select(index){
        this.setState({
            select:index
        })
    }
    gotoDetail(id){
        this.props.history.push({
            pathname:'detail',
            search:'?'+id
        })
    }
    componentWillMount() {
        $axios.get('https://m.tourscool.com/api/products',{

        }).then(({data:{data}})=>{

                this.setState({
                    data
                })

            console.log(this.state.data)
        })
    }

    render() {
        return <div className="list-box">
            {/*头部*/}
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={()=>{this.props.history.push('home')}}
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
                        this.state.data?
                        this.state.data.map(item=>{
                            return <li className="list" key={Date.now()*Math.random()} onClick={this.gotoDetail.bind(this,item.product_id)}>
                                <div className="imgbox">
                                    <img src={item.image} alt=""/>
                                </div>
                                <div className="list-content">
                                    <div className="title">
                                        {item.name}
                                    </div>
                                    <div className="tag">
                                        <ul>
                                            <li className="taglist">热门推荐</li>
                                            <li className="taglist">最受欢迎</li>
                                            <li className="taglist">畅销行程</li>
                                        </ul>
                                    </div>
                                    <div className="price">
                                        <em>{item.default_price}</em><span>/起</span>
                                    </div>
                                    <div className="people">
                                        <span>{item.comment_score}</span>
                                        <span>{item.sales}人出行</span>
                                    </div>
                                </div>
                            </li>
                        }):''
                    }
                </ul>
            </div>
        </div>
    }
}
export default List
//行程概要

import React from 'react'
import './price.scss'
import { Accordion, List } from 'antd-mobile';
class  price extends React.Component{
    constructor(){
        super()
        this.state = {
            price:'',
            price_notice:'',
            package_include:'',
            package_exclude:'',
            notice:''
        }
    }
    componentWillReceiveProps({data}, nextContext) {
        console.log(data)
        this.setState({
            price : data.expense.standard_price,
            price_notice:data.expense.price_notice,
            package_exclude:data.expense.package_exclude,
            package_include:data.expense.package_include,
            notice:data.notice,
        })
    }

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
                            <p className="b">{this.state.price.price_single+'/人'}</p>
                        </div>
                        <div className="item">
                            <p className="t">双人一间</p>
                            <p className="b">{this.state.price.price_double+'/人'}</p>
                        </div>
                        <div className="item">
                            <p className="t">小孩价格</p>
                            <p className="b">{this.state.price.price_kids+'/人'}</p>
                        </div>
                    </div>
                </div>
                <div className="price_sm">
                    <h3>价格说明</h3>
                    <div className="price_sm_info">
                        {this.state.price_notice}
                    </div>
                </div>
                <div className="price_sm">
                    <h3>费用包含</h3>
                    <div className="price_sm_info" dangerouslySetInnerHTML={{__html:this.state.package_include}}>

                    </div>
                </div>
                {/*<div className="pull_show"></div>*/}
                <Accordion defaultActiveKey="-1" className="my-accordion" onChange={this.onChange}>
                    <Accordion.Panel header="费用不含" className="pad">
                        <div className="pull_show_con" dangerouslySetInnerHTML={{__html:this.state.package_exclude}}></div>
                    </Accordion.Panel>
                </Accordion>
            </div>
            <div className="notice_bottom price_detail" id="notice_bottom">
                <Accordion defaultActiveKey="-1" className="my-accordion" onChange={this.onChange}>
                    {
                        this.state.notice.map ?
                        this.state.notice.map(item=>{
                            return <Accordion.Panel header={item.title} className="pad" key={item.title}>
                                <div className="pull_show_con" dangerouslySetInnerHTML={{__html:item.content}}></div>
                            </Accordion.Panel>
                        }) :
                        ''
                    }
                </Accordion>
            </div>
        </div>
    }
}

export default price;
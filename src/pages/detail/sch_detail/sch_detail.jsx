import React from 'react'
import './sch_detail.scss'
class sch_detail extends React.Component{
    constructor(){
        super();
        this.state={
            item:'',
        }
    }
    componentWillReceiveProps({data}, nextContext) {

        this.setState({
            item:data.itinerary.items
        })


    }

    render() {
        return (
            <div className="sd_box">
                <h3>行程详情</h3>
                {
                    this.state.item ?
                    this.state.item.map((item,index)=>{
                        return <div className="sd_item" key={Date.now()*Math.random()}>
                            <div className="title">
                                <i className="title_icon">D{index+1}</i>
                                <span>{item.title}</span>
                            </div>
                            <div className="title_t">
                                <img src="img/zk.png" alt=""/>
                                <span>概况</span>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html:item.content}}>
                            </div>
                            {/*如果有图片及详情介绍就显示*/}
                            {
                                item.attractions ?
                                item.attractions.map(list=>{
                                    return <div key={Date.now()*Math.random()}>
                                        <div className="title_t">
                                            <img src="img/zk.png" alt=""/>
                                            <span>{list.name}</span>
                                        </div>
                                        <div className="content">
                                            {/*图片*/}
                                            <div className="swiper">
                                                <ul>
                                                {list.images ?
                                                list.images.map(item=>{
                                                    return <li key={Date.now()*Math.random()}> <img src={item} alt=""/></li>
                                                }):
                                                ''}
                                                </ul>
                                            </div>
                                            {/*内容*/}
                                            <div dangerouslySetInnerHTML={{__html:list.content}}></div>
                                        {/*    */}
                                        </div>
                                    </div>
                                })   :
                                ''
                            }

                            {
                                item.hotel?
                                <div>
                                    <div className="title_t">
                                        <img src="img/zk.png" alt=""/>
                                        <span>酒店</span>
                                    </div>
                                    <div className="content">
                                        {item.hotel}
                                    </div>
                                </div> :
                                ''    
                            }
                        </div>
                    }) :
                    ''
                }
            </div>
        );
    }
}
export default sch_detail
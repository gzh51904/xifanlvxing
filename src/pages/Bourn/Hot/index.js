import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import MyContext from '../context'

 class Index extends Component {
    constructor(){
        super();
        this.gotoList = this.gotoList.bind(this)
    }
    componentWillMount(){
        // console.log(this.props.allData);
    }

    //跳转到list
    gotoList(category,product_type,span_city,start_city,itemType){
        console.log(category,product_type,span_city,start_city,itemType);
        let {history} = this.props
        history.push('/list')
    }
    render() {
        return (
                <MyContext.Consumer>
                    {
                        // 父组件传过来的数据
                        ({data})=>{
                            // console.log(data);
                            
                            let aData = data.slice(0,1).map(item=>item.dataArray)
                            //名称
                            let bData = []
                            aData.map(item=>{return bData = item})
                            // console.log(bData);
                            
                            //经典线路
                            let cData = [];
                            bData.slice(0,1).map(item=>{
                                return cData = item.datas})
                            // console.log(cData);
                            
                            // 景点的数据
                            let eData = [];
                            bData.slice(1,2).map(item=>{
                                return eData = item.datas})
                            // console.log(eData);
                            
                            // 目的地
                            let fData = [];
                            bData.slice(2,3).map(item=>{
                                return fData = item.datas})
                            // console.log("目的地",fData);
                            
                            return <div className="hot"> 
                                <div className="hotCon hot-xianlu">
                                    <h2 className="hot-h2">经典路线</h2>
                                    <ul>
                                        {
                                            cData.map((item,idx)=>{
                                                // console.log(item,item.product_id);
                                                
                                                return <li className="hot-li" key={idx} onClick={this.gotoList.bind(this,item.category,item.product_type,item.span_city,item.start_city,item.itemType)}>
                                                    <span>{item.content}</span>
                                                </li>
                                                
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="hotCon hot-jingdian">
                                    <h3 className="hot-h2">热门景点</h3>
                                    <ul className="hot-ul-con">
                                        {
                                            eData.map((item,idx)=>{
                                                return <li key={idx} onClick={this.gotoList.bind(this,item.category,item.product_type,item.span_city,item.start_city,item.itemType)}>
                                                    <img src={item.image} alt=""/>
                                                    <p className="hot-po">{item.content}</p>
                                                    <p className="hot-pt">{item.subTitle}</p>
                                                </li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                                <div className="hot-mudidi">
                                    <h4 className="hot-h2">热门目的地</h4>
                                    <ul className="hot-ul-con">
                                        {
                                            fData.map((item,idx)=>{
                                                return <li key={idx}>
                                                    <img src={item.image} alt=""/>
                                                    <p className="hot-po">{item.content}</p>
                                                </li>
                                            })
                                        }
                                        
                                    </ul>
                                </div>
                            </div>
                        }
                    }
                </MyContext.Consumer>
        )
    }
}

Index = withRouter(Index)

export default Index
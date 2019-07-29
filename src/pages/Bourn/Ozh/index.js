import React, { Component } from 'react'
import './index.css'
import MyContext from '../context'

export default class index extends Component {
    render() {
        return (
        <MyContext.Consumer>
            {
                ({data})=>{
                    let aData = data.slice(7,8).map(item=>item.dataArray)
                    //名称
                    let bData = []
                    aData.map(item=>{return bData = item})
                    
                    //顶部图片
                    let cData = [];
                    bData.slice(0,1).map(item=>{
                        return cData = item.datas})
                    // console.log(cData);
                    
                    // 热门目的地
                    let eData = [];
                    bData.slice(1,2).map(item=>{
                        return eData = item.datas})
                    // console.log(eData,'热门目的地');
                    
                    // 全部目的地
                    let fData = [];
                    bData.slice(2,3).map(item=>{
                        return fData = item.datas})
                    // console.log(fData,"全部目的地");


                    return <div className="meixi">
                        <div className="meixi-top">
                           {
                               cData.map(item=>{
                                    return <img src={item.image} alt="" key={item.image} />
                               })
                            }
                        </div>
                        <div className="meixi-mudidi">
                            <h2 className="hot-h2">热门目的地</h2>
                            <ul className="hot-ul-con">
                                {
                                    eData.map((item,idx)=>{
                                        return <li key={idx}>
                                            <img src={item.image} alt=""/>
                                            <p className="hot-po">{item.content}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className="meixi-all">
                            <h3 className="hot-h2">全部目的地</h3>
                            <ul>
                                {
                                    fData.map(item=>{
                                        return <li key={item.name}>
                                            <span>{item.name}</span>
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

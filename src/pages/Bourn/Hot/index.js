import React, { Component } from 'react'
import './index.css'
import { withRouter } from 'react-router-dom'
import MyContext from '../context'

 class Index extends Component {
    componentWillMount(){
        // console.log(this.props.allData);
    }
    render() {
        return (
                <MyContext.Consumer>
                    {
                        ({data})=>{
                            let xData = data.slice(0,1).map(item=>item.dataArray)
                            let oData = xData.map(item=>{return item})
                            console.log(oData);
                            
                            
                            
                            return xData.map((item,idx)=>{
                                // console.log(item);
                                
                                return <div className="hot" key={idx}> 
                                    <div className="hotCon hot-xianlu">
                                        <h2>{item.title}</h2>
                                        <ul>
                                            <li>
                                                <span>洛杉矶+旧金山</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hotCon hot-jingdian">

                                    </div>
                                    <div className="hot-mudidi">

                                    </div>
                                </div>
                            })
                        }
                    }
                </MyContext.Consumer>
        )
    }
}

Index = withRouter(Index)

export default Index
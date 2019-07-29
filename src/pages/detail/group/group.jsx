//团购

import React from 'react'
import './group.scss'
class group extends React.Component{
    constructor(){
        super()
        this.state={
            month:'',
            days:'',
        }
    }
    componentWillReceiveProps({data}, nextContext) {
        this.setState({
            month:data.top_price[0].month,
            days:data.top_price[0].days,
        })
    }

    render() {
        return(
            <div style={{background:'#fff',padding:'10px 15px'}}>
                <div className="group_title">
                    <img src="img/qian.png"/>
                    <span>团期价格</span>
                </div>
                <div className="group_content">
                    {
                        this.state.days ?
                        this.state.days.map(item=>{
                            return <div className="group_item" key={Date.now()*Math.random()}>
                                <div className="date">{this.state.month}/{item.day} 周三</div>
                                <div className="price">{item.price}</div>
                            </div>
                        }) :
                        ''
                    }

                    <div className="group_item">
                        <div className="more_group">更多团期</div>
                    </div>
                </div>
            </div>
        )
    }

}
export default group
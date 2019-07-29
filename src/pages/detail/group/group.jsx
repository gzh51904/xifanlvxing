//团购

import React from 'react'
import './group.scss'
class group extends React.Component{
    constructor(){
        super()
        this.state={
            month:'',
            days:'',
            years:''
        }
    }
    componentWillReceiveProps({data}, nextContext) {
        this.setState({
            month:data.top_price[0].month,
            days:data.top_price[0].days,
            years:data.top_price[0].years,
        })
    }
    // 获得每个月1号是星期几，注意 day - [0-6]
    getWeekday(year, month,day){
        let date = new Date(year, month-1, day);
        if (date.getDay() == 0) {
            return '日'
        } else {
            switch (date.getDay()) {
                case 1 :
                    return '一'
                case 2 :
                    return '二'
                case 3 :
                    return '三'
                case 4 :
                    return '四'
                case 5 :
                    return '五'
                case 6 :
                    return '六'
            }
        }
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
                                <div className="date">{this.state.month}/{item.day} 周{this.getWeekday(this.state.years,this.state.month,item.day)}</div>
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
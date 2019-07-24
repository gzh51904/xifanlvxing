
import React from 'react'
import './group.scss'
class group extends React.Component{
    render() {
        return(
            <div style={{background:'#fff',padding:'10px 15px'}}>
                <div className="group_title">
                    <img src="img/qian.png"/>
                    <span>团期价格</span>
                </div>
                <div className="group_content">
                    <div className="group_item">
                        <div className="date">7/31 周三</div>
                        <div className="price">￥2,999</div>
                    </div>
                    <div className="group_item">
                        <div className="date">7/31 周三</div>
                        <div className="price">￥2,999</div>
                    </div>
                    <div className="group_item">
                        <div className="date">7/31 周三</div>
                        <div className="price">￥2,999</div>
                    </div>
                    <div className="group_item">
                        <div className="date">7/31 周三</div>
                        <div className="price">￥2,999</div>
                    </div>
                    <div className="group_item">
                        <div className="date">7/31 周三</div>
                        <div className="price">￥2,999</div>
                    </div>
                    <div className="group_item">
                        <div className="more_group">更多团期</div>
                    </div>
                </div>
            </div>
        )
    }

}
export default group
//行程概要

import React from 'react'
import './outline.scss'
import store from '../../../store/store'

class  outline extends React.Component{
    constructor(){
        super();
        this.state={
            jdnum:'',
            day:'',
        }
    }
    render() {
        return <div className="outline">
            <div id="hhh">
                <nav ref="xxx">
                    <div className="active">{this.state.day}天行程<i>D1</i></div>
                    <div>费用明细</div>
                    <div>注意事项</div>
                </nav>
            </div>
            {/*固定定位后防止屏幕抖动*/}
            <div id="preout"></div>
            <div className="content">
                <h3>行程概要</h3>
                <div className="content_info">
                    <div><img src="img/txc.png" alt=""/>{this.state.day}天行程</div>
                    <div><img src="img/jd.png" alt=""/>{this.state.jdnum}个景点</div>
                    <div><img src="img/zysy.png" alt=""/>中英双语</div>
                </div>
            </div>
        </div>
    }
    componentDidMount() {

    }
    componentWillReceiveProps({data}, nextContext) {
        //获取距离

        setTimeout(function () {
            //屏幕高度
            let Mih = window.innerHeight
            let getnav = document.getElementById('hhh');
            let ih = this.refs.xxx ? this.refs.xxx.offsetTop:''
            let price_detail = document.getElementById('price_detail');
            let pricey = price_detail.offsetTop -Mih
            let tabs = getnav.children[0].children

            let notice_bottom = document.getElementById('notice_bottom');
            let noticey = notice_bottom.offsetTop - Mih

            let header = document.getElementsByTagName('header')[0];
            let sy = ih - header.offsetHeight;
            //显示空盒子防止固定定位屏幕抖动
            let preout = document.getElementById('preout')
            window.onscroll = function () {
                if (parseInt(this.scrollY)>=sy){
                    getnav.setAttribute('class','fixed')
                    preout.style.display = 'block'
                }else{
                    getnav.setAttribute('class','')
                    preout.style.display = 'none'
                }
                if(parseInt(this.scrollY)>=pricey){
                    pc()
                    tabs[1].setAttribute('class','active');
                }else{
                    pc()
                    tabs[0].setAttribute('class','active');
                }
                if (parseInt(this.scrollY)>=noticey) {
                    pc()
                    tabs[2].setAttribute('class','active');
                }
            }
            function pc() {
                for(var i = 0;i < tabs.length; i++) {
                    tabs[i].setAttribute('class','');
                }
            }
        }.bind(this))

        this.setState({
            day:data.itinerary.duration_days,
            jdnum:data.itinerary.total_attractions
        })
    }
}

export default outline;
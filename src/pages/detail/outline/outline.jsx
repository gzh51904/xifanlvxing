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
            whatDay:'D1',
            sy:'',
        }
    }
    goPrice(){
        let price_detail = document.getElementById('price_detail');
        window.scrollTo(0,price_detail.offsetTop-120)

    }
    goNotic(){
        window.scrollTo(0,500000)
    }
    goDay(){
        window.scrollTo(0,this.state.sy+5)

    }
    render() {
        return <div className="outline">
            <div id="hhh">
                <nav ref="xxx">
                    <div className="active" onClick={this.goDay.bind(this)}>{this.state.day}天行程<i id="showDay">{this.state.whatDay}</i></div>
                    <div onClick={this.goPrice.bind(this)}>费用明细</div>
                    <div onClick={this.goNotic.bind(this)}>注意事项</div>
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
    componentWillUnmount() {
        window.onscroll = null
    }

    componentWillReceiveProps({data}, nextContext) {
        //获取距离

        setTimeout(function () {
            //屏幕高度
            let Mih = window.innerHeight
            let getnav = document.getElementById('hhh');
            let ih = this.refs.xxx ? this.refs.xxx.offsetTop:''

            let sd_item = document.getElementsByClassName('sd_item')
            let itemnum = sd_item.length

            let price_detail = document.getElementById('price_detail');
            let pricey = price_detail.offsetTop -Mih
            let tabs = getnav.children[0].children

            let notice_bottom = document.getElementById('notice_bottom');
            let noticey = notice_bottom.offsetTop - Mih

            let header = document.getElementsByTagName('header')[0];
            let sy = ih - header.offsetHeight;
            this.setState({
                sy
            })
            //显示空盒子防止固定定位屏幕抖动
            let preout = document.getElementById('preout')
            let $this = this

            let num = '1'
            let istrue = true
            let isok = true

            window.onscroll = function (e) {
                if(sd_item[num]){


                if (this.scrollY >= sd_item[num].offsetTop - 95) {
                    if (istrue){
                        istrue = false
                        num++
                        if ($this.state.whatDay.replace('D','')!=num) {
                            $this.setState({
                                whatDay:'D'+(num)
                            })
                        }
                        if (num>=itemnum){
                            num = itemnum - 1
                        }
                        istrue = true
                    }
                }
                if (this.scrollY < sd_item[num].offsetTop - 95) {
                        if (isok){
                            isok = false
                            $this.setState({
                                whatDay:'D'+(num)
                            })
                            if (num<=itemnum){
                                num--
                                if (num<=0) {
                                    num=1
                                }
                            }
                            isok = true
                        }


                }
                }
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
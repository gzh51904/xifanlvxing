
import React from 'react'
import './room.scss'
import {connect} from "react-redux";
import store from '../../../store/store'
class room extends React.Component{
    constructor(){
        super()
        this.state={
            homePrice:'',
            allpeople:1,
            parentnum:1,
            kidnum:0,
            okPrice:''
        }
        this.kidhalder = this.kidhalder.bind(this)
        this.add = this.add.bind(this)
        this.down = this.down.bind(this)
    }
    componentWillMount() {
        //把全局状态保存到本地
        //防止刷新数据丢失
        if (this.props.homePrice) {
            localStorage.setItem("homePrice", JSON.stringify(this.props.homePrice));
        }
        this.setState({
            homePrice:JSON.parse(localStorage.getItem('homePrice'))
        })
        //初始化
        setTimeout(function () {
            this.total()
        }.bind(this))
    }
    kidhalder(e){
        let val = e.target.value -0
        this.setState({
            kidnum:val
        })

        setTimeout(function () {
            if (this.state.parentnum-0+val > 3){
                this.setState({
                    kidnum:3-this.state.parentnum
                })
            }
        }.bind(this))
        setTimeout(function () {
            this.total()
        }.bind(this))
    }
    parenthalder(e){
        let val = e.target.value -0
        if (val==0){val=1}
        this.setState({
            parentnum:val
        })
        setTimeout(function () {
            if (this.state.kidnum-0+val > 3){
                this.setState({
                    parentnum:3-this.state.kidnum
                })
            }
        }.bind(this))
        setTimeout(function () {
            this.total()
        }.bind(this))
    }
    add(type){

        if (this.allpeople()) {
            if (type == 'kidnum'){
                this.setState({
                    kidnum:this.state.kidnum - 0 + 1
                })
            } else{
                this.setState({
                    parentnum:this.state.parentnum - 0 + 1
                })
            }

        }
        setTimeout(function () {
            this.total()
        }.bind(this))
    }
    down(type){
        if (type == 'kidnum'){
            if (this.state.kidnum>1) {
                this.setState({
                    kidnum:this.state.kidnum - 1
                })
            }else {
                this.setState({
                    kidnum:0
                })
            }
        } else{
            if (this.state.parentnum>1) {
                this.setState({
                    parentnum:this.state.parentnum - 1
                })
            }else {
                this.setState({
                    parentnum:1
                })
            }
        }
        setTimeout(function () {
            this.total()
        }.bind(this))
    }
    //计算一个房间总人数，不得超过3人
    allpeople(){
        let parentnum = this.state.parentnum - 0
        let kidnum = this.state.kidnum - 0
        let num = parentnum + kidnum
        if (num>=3){
            return false
        }else return true
    }
    //计算总共价格
    total(){
        let one = this.state.homePrice.one.replace('￥','').replace(',','')-0;
        let two = this.state.homePrice.two.replace('￥','').replace(',','')-0;
        let kid = this.state.homePrice.kid.replace('￥','').replace(',','')-0;
        let price = (one + two * (this.state.parentnum - 1) + kid * this.state.kidnum).toFixed(2).toString()
        let ok = ''
        if (price.length >= 7) {
            //添加，
            ok = '￥' + price.slice(0,price.length-6)+','+price.slice(-6)
        }
        //把计算好的价格保存到全局
        store.dispatch({type:'price',payload:ok})
        return ok

    }
    render() {
        {/*房间*/}
        return <div className="room_room">
            <div className="room-item">
                <div className="title">房间1</div>
                <div className="parent">
                    <span>成人</span>
                    <div className="parent_num">
                        <div className={this.state.parentnum>=2 ? 'pre okPre':'pre'} onClick={this.down.bind(this,'parentnum')}>-</div>
                        <input type="text" onChange={this.parenthalder.bind(this)} className="numActive" value={this.state.parentnum}/>
                        <div className={this.state.parentnum+this.state.kidnum>=3 ? 'next noNext':'next'} onClick={this.add.bind(this,'parentnum')}>+</div>
                    </div>
                </div>
                <div className="kid parent">
                    <span>儿童</span>
                    <em>0-11周岁</em>
                    <div className="parent_num">
                        <div className={this.state.kidnum>=1 ? 'pre okPre':'pre'} onClick={this.down.bind(this,'kidnum')}>-</div>
                        <input type="text" value={this.state.kidnum} onChange={this.kidhalder.bind(this)} className={this.state.kidnum!=0?'numActive':''}/>
                        <div className={this.state.parentnum+this.state.kidnum>=3 ? 'next noNext':'next'}  onClick={this.add.bind(this,'kidnum')}>+</div>
                    </div>
                </div>
            </div>
        </div>
    }
}
//映射全局数据
function mapStateToProps(state){
    return{
        isSelect:state.dateReducer.isSelect,
        homePrice:state.detailReducer.homePrice
    }
}

room = connect(mapStateToProps)(room)
export default room
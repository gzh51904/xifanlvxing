import React from 'react'
import './date_trip.scss'
import { Icon ,NavBar} from 'antd-mobile';
import $axios from 'axios';
import store from '../../store/store'
import Bottom from './bottom_price/bottom_price'
import Room from './room/room'

class dateTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
            months: '',
            nowmonth:'',
            weeks: "一二三四五六日".split(''),
            getCount:'',
            index:'',
            hasdays:'',
            dayarr:'',
            allPrice:'',
        };
    }

    // 获得每个月的日期有多少，注意 month - [0-11]
    //item为点击的月份如7
    getMonthCount(year, month,index=0,item) {
        //点击月份高亮
        let monthList = document.querySelectorAll('.daylist li');
        for (let i = 0; i < monthList.length; i++){monthList[i].setAttribute('class','')}
        monthList[index].setAttribute('class','monthactive')
        //全局状态
        store.dispatch({type:'isSelect',payload:false})
        //去除日期往返
        let goandback = document.getElementById('goandback');
        goandback.innerText = '';
        //当前选择
        this.setState({
            index,
            nowmonth:item,
            hasdays:this.state.data[index].days,
            dayarr:this.state.data[index].days.map(item=>{return item.day})
        })
        let arr = [
            31, null, 31, 30,
            31, 30, 31, 31,
            30, 31, 30, 31
        ];
        //判断是否润年
        const isLeapYear = (year) => {
            return (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
        };
        let count = arr[month] || (isLeapYear(year) ? 29 : 28);
        let newarr = Array.from(new Array(count), (item, value) => {
            return value + 1
        });
        // 获得每个月1号是星期几，注意 day - [0-6]
        let getWeekday = (year, month) => {
            let date = new Date(year, month, 1);
            if (date.getDay() == 0) {
                return 7
            } else {
                return date.getDay();
            }
        }
        for (let i = 0; i < getWeekday(year, month) - 1; i++) {
            newarr.unshift('')
        }
        //返回一个可以直接渲染的数组
        this.setState({
            getCount:newarr,
        })

        // console.log(this.state.data[index].days.map(item=>{return item.day}))
    }
    //选择事件
    select(ev){
        //排他
        let li = document.getElementsByClassName('day')
        for(let i = 0; i < this.state.getCount.length; i++){
            li[i].setAttribute('class','day')
        }
        //全局状态
        store.dispatch({type:'isSelect',payload:true})
        //显示往返信息
        let goandback = document.getElementById('goandback');
        let month = this.state.nowmonth;
        let day = ev.target.parentNode.firstChild.innerText
        for (let i = 0; i < 1;i++){
            goandback.innerText = `${month}月${day}日出发-${month}月${day-0+1}日返`
        }
        return ev.target.parentNode.setAttribute('class','day activeLi')
    }

    componentWillMount() {
        //请求数据
        $axios.get('https://m.tourscool.com/api/product/1482/calendar',{

        }).then(({data})=>{
            console.log(data)
            this.setState({
                data:data.data,
                months:data.data.map(item=>{return item.month})
            })
            //初始化数据
            this.getMonthCount(2019, this.state.months[0]-1,0,this.state.months[0])

        })


        //如果当前是date，清除底部
        setTimeout(function () {
            let footer = document.querySelector('.footer')
            if (this.props.match.path === '/dateTrip'){
                footer.style.display = 'none'
            }
        }.bind(this))
    }
    componentWillUnmount() {
        //还原
        let footer = document.querySelector('.footer')
        footer.style.display = 'block'
    }
    componentWillReceiveProps(nextProps, nextContext) {

    }


    render() {
        return <div className="date_trip">
            {/*头部*/}
            <div className="header">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => console.log('onLeftClick')}
                >选择日期和人数</NavBar>
            </div>
            {/*月份*/}
            <ul className="daylist">
                {
                    this.state.months?
                    this.state.months.map((item,index) => {
                        return <li key={item} onClick={this.getMonthCount.bind(this, 2019, item-1,index,item)}>{item}月</li>
                    }):''

                }
            </ul>
            {/*星期*/}
            <ul className="week">
                {
                    this.state.weeks.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            {

            }
            <ul className="days">
                {
                    this.state.getCount?
                    this.state.getCount.map((item,index) => {
                        return <li  className="day" key={Date.now()*Math.random()}>
                            <span className={this.state.dayarr.indexOf(item)!=-1? 'active' : ''}
                                  // onClick={this.select.bind(this,index)}
                            >{item}</span><br/>
                            {
                                this.state.hasdays.map(day=>{
                                    return <span key={Date.now()*Math.random()} className="price" onClick={(event) => { }}onClick={this.select.bind(this)}>{day.day == item ? day.price : ''}</span>
                                })
                            }
                        </li>
                    }):''
                }
            </ul>
            <div style={{'background':'#fff'}}>
                <div className="bottom">
                    <div id="goandback"></div>
                    <div>最少1人成团</div>
                </div>
            </div>
            {/*房间*/}
            <Room/>
            {/*    底部价格*/}
            <Bottom/>
            <div style={{height:'82.5px'}}></div>{/*//撑开*/}

        </div>
    }

}


export default dateTrip
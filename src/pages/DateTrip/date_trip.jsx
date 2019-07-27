import React from 'react'
import './date_trip.scss'
import { Icon ,NavBar} from 'antd-mobile';
import $axios from 'axios';

class dateTrip extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:'',
            months: '',
            weeks: "一二三四五六日".split(''),
            getCount:'',
            index:'',
            hasdays:'',
            dayarr:''
        };
    }

    // 获得每个月的日期有多少，注意 month - [0-11]
    getMonthCount(year, month,index=0) {
        //当前选择
        this.setState({
            index,
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
    componentWillMount() {
        //请求数据
        $axios.get('https://m.tourscool.com/api/product/1482/calendar',{

        }).then(({data})=>{
            this.setState({
                data:data.data,
                months:data.data.map(item=>{return item.month})
            })
            //初始化
            this.getMonthCount(2019, this.state.months[0]-1)

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
                        return <li key={item} onClick={this.getMonthCount.bind(this, 2019, item-1,index)}>{item}月</li>
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
                            >{item}</span><br/>
                            {
                                this.state.hasdays.map(day=>{
                                    return <span key={Date.now()*Math.random()} className="price">{day.day == item ? day.price : ''}</span>
                                })
                            }
                        </li>
                    }):''
                }
            </ul>
        </div>
    }

}


export default dateTrip
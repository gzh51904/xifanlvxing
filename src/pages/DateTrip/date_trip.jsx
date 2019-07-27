import React from 'react'
import './date_trip.scss'
import { Icon } from 'antd-mobile';
class dateTrip extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            months: [7, 8, 9, 10, 11],
            weeks: "一二三四五六日".split(''),
            getCount:'',
            hhh:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
        };
    }

    // 获得每个月的日期有多少，注意 month - [0-11]
    getMonthCount(year, month) {
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
            getCount:newarr
        })
    }
    componentWillMount() {
        this.getMonthCount(2019, 6)
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }

    render() {
        return <div className="date_trip">
            {/*头部*/}
            <div className="header">
                <div className="icon"><Icon type="left" /></div>
                <div className="select">选择日期和人数</div>
            </div>
            <ul className="daylist">
                {
                    this.state.months.map(item => {
                        return <li key={item} onClick={this.getMonthCount.bind(this, 2019, item-1)}>{item}月</li>
                    })
                }
            </ul>
            <ul className="week">
                {
                    this.state.weeks.map(item => {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
            <ul className="days">
                {

                    this.state.getCount.map((item,index) => {
                        return <li  className="day" key={Date.now()*Math.random()}>
                            <span>{item}</span>
                            {/*{*/}
                            {/*    item ? <span>{this.state.hhh[index]}</span> : ''*/}
                            {/*}*/}
                        </li>
                    })
                }
            </ul>
        </div>
    }

}


export default dateTrip
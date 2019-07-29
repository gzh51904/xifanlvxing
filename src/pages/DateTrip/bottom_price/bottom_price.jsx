
import React from 'react';
import './bottom_price.scss'
import {connect} from "react-redux";


class price  extends React.Component{
    constructor(){
        super()
        this.state={
            isSelect:'',
            price:''
        }
        console.log(this)
    }
    componentWillMount() {

    }
    componentDidMount() {
        console.log(this.state.homePrice)
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            isSelect:nextProps.isSelect,
            price : nextProps.price,
        })
        console.log(nextProps)
    }


    render() {
        return <div style={{height:'20px'}}>
            {/*底部*/}
            {!this.state.isSelect?
            <div className="bottom_price">
                <div className="total_price">
                    <div>0.00</div>
                    <div>请选择相关信息</div>
                </div>
                <div className="call">
                    <i><img src="img/callkf.png" alt=""/></i>
                    <div>联系客服</div>
                </div>
                <div className="bottom_btn">
                    <button>下一步</button>
                </div>
            </div> : //判断显示模块
                <div className="bottom_price">
                    <div className="total_price activeColor">
                        <div>{this.state.price}</div>
                        <div>明细</div>
                    </div>
                    <div className="call">
                        <i><img src="img/callkf.png" alt=""/></i>
                        <div>联系客服</div>
                    </div>
                    <div className="bottom_btn">
                        <button className="btnColor">下一步</button>
                    </div>
                </div>
            }
        </div>
    }
}
//映射全局数据
function mapStateToProps(state){
    return{
        isSelect:state.dateReducer.isSelect,
        price : state.dateReducer.price
    }
}
price = connect(mapStateToProps)(price)

export default price
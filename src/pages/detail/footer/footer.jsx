//底部

import React from 'react'
import './footer.scss'
import {withRouter} from 'react-router-dom'
class footer extends React.Component{
    constructor(){
        super()
        this.state ={
            id:''
        }
        this.goto = this.goto.bind(this)
    }
    componentWillReceiveProps({data}, nextContext) {
        this.setState({
            id:data
        })
    }

    goto(){
        let {history} = this.props
        console.log(this.props,history)
        history.push({pathname:'/dateTrip',search:'?'+this.state.id})
    }
    render() {
        return(
            <div  className="detail_footer">
                <div className="footer">
                    <div className="sc">
                        <img src="img/shoucan.png" alt=""/>
                        <span>收藏</span>
                    </div>
                    <div className="call">
                        <img src="img/call.png" alt=""/>
                        <span>电话咨询</span>
                    </div>
                    <div className="zx">
                        <img src="img/zixun.png" alt=""/>
                        <span>在线咨询</span>
                    </div>
                    <div className="yuding">
                        <div className="ybuy" onClick={this.goto.bind(this)}>立即预定</div>
                    </div>
                </div>
            </div>
        )
    }

}
footer = withRouter(footer)
export default footer
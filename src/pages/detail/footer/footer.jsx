import React from 'react'
import './footer.scss'

class footer extends React.Component{
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
                        <div className="ybuy">立即预定</div>
                    </div>
                </div>
            </div>
        )
    }

}
export default footer
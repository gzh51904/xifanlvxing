//行程概要

import React from 'react'
import './outline.scss'

class  outline extends React.Component{
    render() {
        return <div className="outline">
            <div id="hhh">
                <nav>
                    <div className="active">5天行程<i>D1</i></div>
                    <div>费用明细</div>
                    <div>注意事项</div>
                </nav>
            </div>
            {/*固定定位后防止屏幕抖动*/}
            <div id="preout"></div>
            <div className="content">
                <h3>行程概要</h3>
                <div className="content_info">
                    <div><img src="img/txc.png" alt=""/>天行程</div>
                    <div><img src="img/jd.png" alt=""/>7个景点</div>
                    <div><img src="img/zysy.png" alt=""/>中英双语</div>
                </div>
            </div>
        </div>
    }
}

export default outline;
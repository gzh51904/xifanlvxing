//推荐
import React from 'react'
import './description.scss'
class description extends React.Component{
    render() {
        return(
            <div style={{background:'#fff',padding:'10px 15px',margin:'12px 0'}}>
                <div className="group_title">
                    <img src="img/zan.png"/>
                    <span>稀饭推荐</span>
                </div>
                <div className="desc_content">
                    ★【品质服务】专车接送机，四晚连住大阪商圈酒店，纯玩无购物；<br />★【经典打卡】奈良公园喂鹿，清水寺、伏见稻荷大社结缘祈福；<br />★【自在由我】1天自由行，自由安排行程，推荐前往环球影城；<br />★【特色体验】有马温泉泡汤，神户三田奥特莱斯低价血拼。<br />
                </div>
            </div>
        )
    }

}
export default description
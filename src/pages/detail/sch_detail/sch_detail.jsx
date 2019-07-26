import React from 'react'
import './sch_detail.scss'
class sch_detail extends React.Component{
    constructor(){
        super();
        this.state={
            item:'',
        }

    }
    componentWillReceiveProps({data}, nextContext) {
        console.log(data)
        this.setState({
            item:data.itinerary.items
        })
    }

    render() {
        return (
            <div className="sd_box">
                <h3>行程详情</h3>
                {
                    this.state.item ?
                    this.state.item.map((item,index)=>{
                        return <div className="sd_item" key={Date.now()*Math.random()}>
                            <div className="title">
                                <i className="title_icon">D{index+1}</i>
                                <span>{item.title}</span>
                            </div>
                            <div className="title_t">
                                <img src="img/zk.png" alt=""/>
                                <span>概况</span>
                            </div>
                            <div className="content" dangerouslySetInnerHTML={{__html:item.content}}>
                            </div>
                            {/*如果有图片及详情介绍就显示*/}
                            {
                                item.attractions ?
                                item.attractions.map(list=>{
                                    return <div key={Date.now()*Math.random()}>
                                        <div className="title_t">
                                            <img src="img/zk.png" alt=""/>
                                            <span>{list.name}</span>
                                        </div>
                                        <div className="content">
                                            {/*图片*/}
                                            <div className="swiper">
                                                <ul>
                                                {list.images ?
                                                list.images.map(item=>{
                                                    return <li key={Date.now()*Math.random()}> <img src={item} alt=""/></li>
                                                }):
                                                ''}
                                                </ul>
                                            </div>
                                            {/*内容*/}
                                            <div dangerouslySetInnerHTML={{__html:list.content}}></div>
                                        {/*    */}
                                        </div>
                                    </div>
                                })   :
                                ''
                            }





                            <div className="title_t">
                                <img src="img/zk.png" alt=""/>
                                <span>酒店</span>
                            </div>
                            <div className="content">
                                {item.hotel}
                            </div>
                        </div>
                    }) :
                    ''
                }
                {/*<div className="sd_item">*/}
                {/*    <div className="title">*/}
                {/*        <i className="title_icon">D1</i>*/}
                {/*        <span>全国-大阪</span>*/}
                {/*    </div>*/}
                {/*    <div className="title_t">*/}
                {/*        <img src="img/zk.png" alt=""/>*/}
                {/*        <span>概况</span>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        今天是出发日，请您至少于航班起飞前3小时到达机场。我们会根据您的航班时间安排接机。<br />Tips:<br />1、我司将于出发前与您沟通出游的注意事项，请尽量保持手机微信畅通；<br />2、到达日本后，我们为您安排了贴心的【接机服务】，司机将送您前往酒店办理入住。如您的航班时间较早，随后可以自行在酒店周围逛逛，提前感受一下日本的城市风情。<br />*/}
                {/*    </div>*/}
                {/*    <div className="title_t">*/}
                {/*        <img src="img/zk.png" alt=""/>*/}
                {/*        <span>酒店</span>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        大阪华丽庭院酒店公寓或同级*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="sd_item">*/}
                {/*    <div className="title">*/}
                {/*        <i className="title_icon">D2</i>*/}
                {/*        <span>大阪-京都-奈良-大阪</span>*/}
                {/*    </div>*/}
                {/*    <div className="title_t">*/}
                {/*        <img src="img/zk.png" alt=""/>*/}
                {/*        <span>概况</span>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        ▼清水寺区域<br />【清水寺】世界文化遗产，京都人气观光景点。始建于778年，是京都最古老的寺院，是日本国宝级文物。地主神社位于清水寺正殿北侧的，是日本结缘、祈求恋爱运的神社。(参拜费: 成人:400日币, 中小学生:200日币) 费用敬请自理<br />【二、三年坂】【石塀小路】【祗园·花见小路】【八坂神社】<br />▼伏见稻荷大社<br />伏见稻荷大社以「千本鸟居」闻名，每年都吸引无数日本国内外游客到访，更连续3年在全球最大旅游网站的调查中，获得「最受外国人欢迎的日本景点」第1位。在这里为我们自己和亲爱的家人祈福吧。<br />除此之外，伏见稻荷大社的绘马也是别具特色，白狐形状，可以脑洞大开涂鸦成各种神表情。<br />▼奈良公园<br />奈良公园是位于奈良市若草山麓的都市公园，东大寺、春日大社等奈良的名胜古迹都在这里，是游奈良的必到之处。位于公园附近的若草山是俯瞰奈良风光的绝妙之地，每年1月还会在这里举行“若草烧山”等传统活动。悠闲自在地漫步其中是游览公园的最佳方式，这里还有最集中的鹿群，喂食萌萌的小鹿也是游人最大的观赏点。这里的鹿也极富灵性，见到游人手上有鹿饼会主动走来，所以需要当心成群结队的小鹿来将你扑倒哦。（鹿仙贝参考价150日元/10块）<br />▼心斋桥、道顿崛<br />游玩结束后，直接在心斋桥解散结束行程。<br />心斋桥：大阪最著名的一条商店街，云集了大型百货、连锁药妆店、老品牌店和小铺。各种档次和风格的商品应有尽有，Hello kitty和Disney的专卖店也在这里落户。这里还是MM们喜欢的药妆店的聚集地，化妆品护肤品可以随意淘。大多数店铺都配有中文导购，支持银联卡付款，可以轻松享受购物的乐趣。<br />道顿堀：大阪美食的代名词，不论是白天还是夜晚，一条街就从未有过休息的时候。作为大阪人所谓“吃趴下”饮食文化的发源地，道顿堀有着众多美食小吃比如章鱼丸子、大阪烧、金龙拉面等，也有传统特色的日式居酒屋以及各种网红餐厅，比如深受国人追捧的蟹道乐。<br />*/}
                {/*    </div>*/}
                {/*    <div className="title_t">*/}
                {/*        <img src="img/zk.png" alt=""/>*/}
                {/*        <span>清水寺</span>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        /!*图片*!/*/}
                {/*        <div className="swiper">*/}
                {/*            <ul>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5bc9c2058521d.jpg/1920x1280" alt=""/></li>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5bc9c2256f243.jpg/1920x1280" alt=""/></li>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5c8f329f2e7df.jpg/1920x1280" alt=""/></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        <p>清水寺<span>于 778 年开创，是</span>京都最古老的寺院，寺院的本堂被指定为国宝。清水寺<span>以姻缘着名，因“清水的观音”自平安时代以来，前来参拜老百姓就络绎不绝。寺院</span>有包括地主神社在内，15 世纪末到 17 世纪的建筑物。以春天的樱花和新绿， 秋天的红叶和四季不同的美景作为背景的舞台样式的正殿（国宝）建筑构造向前延伸伫造在悬崖的上面。 “清水的舞台”名气响亮，从此眺望市区，景色美丽令人摒息。院内有内院、阿弥陀殿、三重塔等 15 座 重要的文化财产。它与金阁寺、二条城并称为京都三大名胜，1994年列入世界文化遗产名录。</p>*/}
                {/*    </div>*/}
                {/*    <div className="title_t">*/}
                {/*        <img src="img/zk.png" alt=""/>*/}
                {/*        <span>伏见稻荷大社</span>*/}
                {/*    </div>*/}
                {/*    <div className="content">*/}
                {/*        /!*图片*!/*/}
                {/*        <div className="swiper">*/}
                {/*            <ul>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5bc9c3c9f32a3.jpg/1920x1280" alt=""/></li>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5bc9c3c9f3afb.jpg/1920x1280" alt=""/></li>*/}
                {/*                <li> <img src="https://img.tourscool.com/images/tourCity/5c8f33a8c5174.jpg/1920x1280" alt=""/></li>*/}
                {/*            </ul>*/}
                {/*        </div>*/}
                {/*        <p>伏见稻荷大社位于稻荷山的山麓，<span>是稻荷神社的总本社，也是</span><span>深受京都人爱戴的神社之一，祭祀着稻荷大神(OINARISANN)。自古以来主要掌管五穀丰收、 商业繁荣。</span>，<span>以「千本鸟居」闻名，每年都吸引无数日本国内外游客到访，更连续3年在全球最大旅游网站的调查中，获得「最受外国人欢迎的日本景点」第1位。</span>鸟居通道里也有一些餐厅提供当地的菜肴，如稻荷寿司和狐族乌冬面，汤面上放有炸油豆腐，据说是狐狸最喜欢的食物。<span>除此之外，伏见稻荷大社的绘马也是别具特色，白狐形状，可以脑洞大开涂鸦成各种神表情。</span> \r\n</p>\r\n<p>\r\n\t每年的新年参拜元旦3日间，来访的人潮数以百万计。不仅是京都，在全国也是相当有名气。</p>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        );
    }
}
export default sch_detail
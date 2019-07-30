import React from 'react'
import {NavBar, Icon,Popover} from 'antd-mobile';
import Carousel from './carousel/carousel '
import Schedule from './schedule/schedule'
import Group from './group/group'
import Footer from './footer/footer'
import Description from "./description/description";
import Outline from "./outline/outline";
import SchDetail from  './sch_detail/sch_detail'
import Price from  './pricedetail/price'
import './detail.scss'
import {connect} from 'react-redux'
import store from '../../store/store'
import {Route} from 'react-router-dom'

const Item = Popover.Item;


class detail extends React.Component {
    constructor() {
        super()
        this.state = {
            visible: true,
            selected: '',
            y:'',
            data:'',
            title:'',
            ih:'',//接收从组件
            id:'',
            isOk:''
        };
    }
    componentWillMount() {
        //如果当前是detail，清除main样式及底部tab
        setTimeout(function () {
            let main = document.querySelector('.main')
            if (this.props.match.path === '/detail'){
                main.style.overflow = 'visible';
            }
        }.bind(this))
        //发起请求
        let id = this.props.location.search.replace('?','')
        let url = 'https://m.tourscool.com/api/product/' + id
        this.setState({
            id
        })
        let data = this.props.$axios.get(url,{
        }).then(({data})=>{
            this.setState({
                data:data.data,
                title:data.data.product.name
            })
            //设置全局
            let homePrice = data.data.expense.standard_price
            let obj = {
                one:homePrice.price_single,
                two:homePrice.price_double,
                kid:homePrice.price_kids
            }
            let daynum = data.data.itinerary.duration_days
            store.dispatch({type:'homePrice',payload:obj})
            store.dispatch({type:'daynum',payload:daynum})

        })

    }
    componentWillUnmount() {
        //结束还原
        let main = document.querySelector('.main')
        main.style.overflow = 'auto'
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log(nextState.data,this.state.data)
        if (nextState.data == this.state.data) {
            return false
        }
        return true
    }

    componentDidMount() {

    }
    handleVisibleChange = (visible) => {
        this.setState({
            visible,
        });
    };
    //回到首页
    onSelect = (opt) => {
       let {history} = this.props
        history.push('/home')
    };
    render() {
        return (
            <div id="detail">
                {/*头部*/}
                <header className="detail_header">
                    <NavBar
                        mode="light"
                        icon={<Icon type="left"/>}
                        onLeftClick={() => this.props.history.push('home')}
                        rightContent={[

                        ]}
                        >
                        <Popover
                            // overlayClassName="fortest"
                            overlayStyle={{ color: 'currentColor' }}
                            // visible={this.state.visible}
                            overlay={[
                                (<div key="3" className="sanjiaoxing"></div>),
                                (<Item key="4" value="scan"  data-seed="logId" ><img src="img/dhome.png" alt="" />首页</Item>),
                                (<Item key="5" value="special"  style={{ whiteSpace: 'nowrap' }}><img src="img/dloc.png" alt=""/>目的地</Item>),
                                (<Item key="6" value="button ct" >
                                    <span style={{ marginRight: 5 }}><img src="img/duser.png" alt=""/>个人中心</span>
                                </Item>),
                                (<Item key="7" value="special"  style={{ whiteSpace: 'nowrap' }}><img src="img/dsc.png" alt=""/>我的收藏</Item>)
                            ]}
                            align={{
                                overflow: { adjustY: 0, adjustX: 0 },
                                offset: [-10, 0],
                            }}
                            onVisibleChange={this.handleVisibleChange}
                            onSelect={this.onSelect}
                        >
                            <div style={{
                                height: '100%',
                                padding: '0 15px',
                                marginRight: '-15px',
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            >
                                <Icon key="1" type="ellipsis" className="right_more"/>
                            </div>
                        </Popover>
                        <div className="title_content">{this.state.title}</div>
                    </NavBar>
                </header>
                {/*内容*/}
                <div className="detail_con">
                    {/*    轮播图*/}
                    <Carousel data={this.state.data}></Carousel>
                    {/*    热门行程*/}
                    <Schedule data={this.state.data}></Schedule>
                    {/*    团购*/}
                    <Group data={this.state.data}/>
                    {/*    推荐*/}
                    <Description data={this.state.data}/>
                    {/*    行程概要*/}
                    <Outline data={this.state.data}/>
                    {/*    行程详情*/}
                    <SchDetail data={this.state.data}/>
                    {/*    费用明细*/}
                    <Price data={this.state.data}/>
                </div>
                {/*    底部*/}
                <Footer data={this.state.id}></Footer>
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        $axios:state.commonReducer.axios,
    }
}
detail = connect(mapStateToProps)(detail)


export default detail
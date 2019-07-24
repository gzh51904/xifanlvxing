import React from 'react'
import './schedule.scss'
import {Modal, List, Button, WhiteSpace, WingBlank, Icon} from 'antd-mobile';

class schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };
    }

    showModal = key => (e) => {
        e.preventDefault(); // 修复 Android 上点击穿透
        this.setState({
            [key]: true,
        });
    }
    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    render() {
        return (
            <div style={{background: '#fff', margin: '12px 0', padding: '0 15px'}}>
                <div className="schedule_title"><img src="img/gou.png" alt="" style={{
                    width: '14px',
                    height: '14px',
                    position: 'relative',
                    top: '2px',
                    marginRight: '5px'
                }}/>
                    <sp-an>畅销行程</sp-an>
                    <Icon type="right" className="schedule_title_r" onClick={this.showModal('modal')}/></div>
                <div style={{padding: '10px 0'}}>
                    <div className="schedule_go"><img src="img/qifei.png" alt="" style={{
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        top: '4px',
                        marginRight: '2px'
                    }}/><span>出发地</span><span className="schedule_place">大阪</span></div>
                    <div className="schedule_go"><img src="img/xialuo.png" alt="" style={{
                        width: '20px',
                        height: '20px',
                        position: 'relative',
                        top: '4px',
                        marginRight: '2px'
                    }}/><span>结束地</span><span className="schedule_place">大阪</span></div>
                </div>
                {/*    弹窗*/}
                <WingBlank>
                    <WhiteSpace/>
                    <Modal
                        popup
                        visible={this.state.modal}
                        onClose={this.onClose('modal')}
                        animationType="slide-up"
                        afterClose={() => {
                            // alert('afterClose');
                        }}
                    >
                        <List renderHeader={() => <div>服务说明</div>} className="popup-list">

                            {['畅销行程'].map((i, index) => (
                                <List.Item key={index}>{i}
                                    <img src="img/gou.png" alt="" className="gou"/>
                                </List.Item>
                            ))}
                        </List>
                    </Modal>
                </WingBlank>
            </div>
        )
    }
}

export default schedule
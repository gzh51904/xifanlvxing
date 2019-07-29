//推荐
import React from 'react'
import './description.scss'
class description extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            content:''
        }
    }
    componentWillReceiveProps({data}, nextContext) {

        this.setState({
            content:data.product.small_description
        })
    }

    render() {
        return(
            <div style={{background:'#fff',padding:'10px 15px',margin:'12px 0'}}>
                <div className="group_title">
                    <img src="img/zan.png"/>
                    <span>稀饭推荐</span>
                </div>
                <div className="desc_content" dangerouslySetInnerHTML={{ __html: this.state.content}}>
                </div>
            </div>
        )
    }

}
export default description
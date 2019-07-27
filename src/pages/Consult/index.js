import React,{ Component } from 'react'

import './index.scss'

class Consult extends Component{
  componentWillMount(){
    console.log(this.props.match)
    setTimeout(function(){
         const footer = document.querySelector('.footer')
         let {url}=this.props.match;
         if(url==='/consult'){
             footer.style.display='none';
         }
    }.bind(this))
    
}

componentWillUnmount(){
    const footer=document.getElementsByClassName('footer')[0];
    footer.style.display='block';
}

goBack(){
  window.history.go(-1);
}

  constructor(){
    super();
    this.state={

    }
    this.goBack=this.goBack.bind(this);
  }
    render(){
      return<div className="content">
        <header>
        <p className="left" onClick={this.goBack}>&lt;</p>
        <p className="con"><span >客服咨询</span></p>
        </header>
        <main className='m'>

        </main>
      </div>
    }
}

export default Consult;
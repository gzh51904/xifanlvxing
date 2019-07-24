import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';

//引入页面
import detail from './pages/detail/detail'



class App extends React.Component{
  render() {
      return (
          <div className="App">
              <Route path="/detail" component={detail}/>
              {/*<Route component={detail}></Route>*/}
          </div>
      );
  }
}

export default App;

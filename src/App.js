import React, { Component,Fragment } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Router from './config/router'
import routes from './config/router.config'
import Section from './components/section/section'
import Footer from './components/footer/footer'
import { setData } from './store/action'
class App extends Component {
  render() {
    let { data, total} = this.props;
    return (
      <BrowserRouter>
        <Fragment>
            <header>我的购物车</header>
            <Router routes={routes.routes}></Router>
            <Section data={data} />
            <Footer total={total} />
        </Fragment>
      </BrowserRouter>
    );
  }
  componentDidMount(){
    this.props.getData()
  }
}
function mapStateToProps(state){
  let sum = 0;
  let data = state.getdata;
  data.map(item=>{
    item.shoplist.tooth.map(i=>{
      if(i.selected){
        if (i.total) {
          sum += i.total
        } else {
          sum += i.price
        }
      }
    })
  })
  return {
    data:state.getdata,
    total:sum
  }
}
function mapDispatchToProps(dispatch){
  return {
    getData(){
      dispatch(setData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

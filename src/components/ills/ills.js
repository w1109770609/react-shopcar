import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selects, computed, deletes } from '../../store/action'

import './ills.css'
class Ills extends Component {
    render() {
        let {item} = this.props
        return <div className="content">
           <div className="left">
                <div className="con">
                    <input checked={item.selected} onChange={()=>{this.toggleSeleted(item.selected,item.qid)}} type="checkbox" />
                    <span>{item.name}</span>
                </div>
                <div className="total">
                    <div>{item.price}.00</div>
                    <p>
                        <span onClick={()=>{this.Add()}}>+</span>
                        <span>{item.num}</span>
                        <span onClick={()=>{this.Minus()}}>-</span>
                    </p>
                </div>
           </div>
           <div className="delete" onClick={this.delete} >删除</div>
        </div>
    }
    delete=()=>{
        let {ind,index} = this.props;
        this.props.dispatch(deletes(ind, index));
    }
    setCount(num){
        let { ind, index } = this.props;
        this.props.dispatch(computed(num, ind,index))
    }
    Add=()=>{
        this.setCount(1)
    }
    Minus=()=>{
        this.setCount(-1)
    }
    toggleSeleted=(selected,qid)=>{
        let {dispatch} = this.props;
        dispatch(selects(selected,qid))
    }
}

export default connect(null,null,null,{pure:false})(Ills);

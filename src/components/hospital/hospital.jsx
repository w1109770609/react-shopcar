import React,{ Component } from 'react'
import Ills from '../ills/ills'
import { selectAll } from '../../store/action'
import { connect } from 'react-redux'
import './hospital.css'
class Hospital extends Component{
    render(){
        let {item} = this.props
        return <div>
            <div className="tit">
                <input type="checkbox" checked={item.selected} onChange={()=>{this.toggleSeleted(item.cid,item.selected)}} />
                <span>{item.hosptail}</span>
            </div>
            {
                item.tooth.map((item,index)=>{
                    return <Ills key={item.qid} ind={index} index={this.props.index} item={item}></Ills>
                })
            }
        </div>
    }
    toggleSeleted=(cid,selected)=>{
        let {dispatch,item} = this.props;
        dispatch(selectAll(cid,item.selected))
    }
}
export default connect(null,null,null,{pure:false})(Hospital);

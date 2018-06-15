import React, { Component } from 'react';
import Hospital from '../hospital/hospital';
class Section extends Component{
    render(){
        let {data} = this.props
        return (
            <section>
                {
                    data && data.map((item, index) => {
                        return <Hospital key={item.shoplist.cid} index={index} item={item.shoplist}></Hospital>
                    })
                }
            </section>
        )
    }
}
export default Section;

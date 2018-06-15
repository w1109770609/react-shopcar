import React, { Component } from 'react';
class Footer extends Component{
    render(){
        let {total} = this.props
        return (
            <footer>
                <span>总金额：￥</span><strong>{total}</strong>
            </footer>
        )
    }
}
export default Footer;

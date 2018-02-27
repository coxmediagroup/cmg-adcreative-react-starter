import React, { Component } from 'react';
import '../../../src/public/style/styles.less';
export default class ListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (<a onMouseOver={(e)=>{this.props.changeSource(this.props.content, this.props.link); e.preventDefault();}} className="list-item" href={this.props.link} target="_blank"><li>{this.props.content}</li></a>)
    }
}

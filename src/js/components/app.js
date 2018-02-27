import React, { Component } from 'react';
import '../../../src/public/style/styles.less';
import ListItem from './list-item';
export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listItems: [
                {
                    title: 'Dog 1',
                    content: 'Dog 1',
                    link: 'dog1.jpg'
                },
                {
                    title: 'Dog 2',
                    content: 'Dog 2',
                    link: 'dog2.jpg'
                }
            ],
            currentImgSource: 'dog2.jpg',
            currentTitle: null || 'loading',
            changeSource: (title, link) => {
                this.setState({currentTitle: title , currentImgSource: link })
        }
        };
    }

    componentDidMount() {
        this.state.changeSource('A nice dog', 'dog2.jpg');
    }

    render() {
        return (
            <div>
                <div className="row nav-wrap text-right">
                    <div className="col-md-12">
                        {this.state.listItems.map((listItem)=>{
                            return (<ListItem changeSource={this.state.changeSource} link={listItem.link} title={listItem.title} content={listItem.content}/>)
                        })}
                    </div>
                </div>
                <div className="row text-left">
                    <h4>{this.state.currentTitle}</h4>
                </div>
                <div className="row text-center justify-content-center">
                    <div className="col-md-12">
                        <img className="img-fluid" src={require('../../public/images/' + this.state.currentImgSource)} alt={this.state.currentTitle}></img>
                    </div>
                </div>
            </div>
        )
    }
}

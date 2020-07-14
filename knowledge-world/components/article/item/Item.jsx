import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
    state = {}
    render() {
        const { data } = this.props;
        return (
            <div>
                <div className="container-wrapper">
                    <div className="image-box">
                        <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2851553266,2395599848&fm=26&gp=0.jpg" alt="" />
                    </div>
                    <div className="content-box">
                        <span className="title">{data.titles}</span>
                        <hr />
                        <span className="author">{data.names}</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;

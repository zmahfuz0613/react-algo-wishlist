import React, { Component } from 'react';
import './Item.css'

class Item extends Component {
    handleUpVote = () => {
        this.props.upVote(this.props.item)
    }

    handleDownVote = () => {
        this.props.downVote(this.props.item)
    }

    render() {
        return (
            <div className="item-container">
                <h1>{this.props.item} <a onClick={this.handleUpVote}>Up</a> | <a onClick={this.handleDownVote}>Down</a></h1>
            </div>
        );
    }
}

export default Item;

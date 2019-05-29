import React, { Component } from 'react';
import Item from './Item'

class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ["Apple iPad Mini", "Vespa Scooter", "Shake Shack Milkshake", "12oz Stumptown Coffee"]
        }
    }

    handleItemUpVote = (item) => {

        this.setState(state => {
            state.items.splice(this.state.items.indexOf(item)-1, 0, item)
            state.items.splice(this.state.items.lastIndexOf(item), 1)
            return state
        })
    }

    handleItemDownVote = (item) => {

        this.setState(state => {
            state.items.splice(this.state.items.indexOf(item)+2, 0, item)
            state.items.splice(this.state.items.indexOf(item), 1)
            return state
        })
    }

    render() {
        const items = this.state.items.map((item) => (
            <Item 
                key={item}
                item={item}
                upVote={this.handleItemUpVote}
                downVote={this.handleItemDownVote}
            />
            ))
        return (
            <div>
                <h1>Your List</h1>
                { items }
            </div>
        );
    }
}

export default List;

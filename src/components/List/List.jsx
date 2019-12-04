import React, { Component } from "react";
import Character from "../Character/Character";
import "./List.css";
class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        };
    }

    renderList() {
        if (this.state.items !== this.props.items) {
            this.setState({ items: this.props.items });
        }
        const items = this.state.items.map(item => {
            return <Character data={item} />;
        });

        return items;
    }

    render() {
        return <div className="ListContainer">{this.renderList()}</div>;
    }
}

export default List;

import React, { Component } from "react";
import Character from "../Character/Character";
import "./List.css";
class List extends Component {
    renderList() {
        const items = this.props.items.map(item => {
            return <Character data={item} />;
        });

        return items;
    }

    render() {
        return <div className="ListContainer">{this.renderList()}</div>;
    }
}

export default List;

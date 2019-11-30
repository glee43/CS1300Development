import React, { Component } from "react";
import "./Character.css";
class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: false
        };
    }

    render() {
        let { data } = this.props;
        return (
            <div className="characterContainer">
                <img className="characterImage" src={data.image} />
                <div className="charNum">Number: {data.charNum}</div>
                <div className="charNum">Weight: {data.weight}</div>
                <div className="charNum">Franchise: {data.franchise}</div>
                <div className="charNum">Type: {data.type}</div>
            </div>
        );
    }
}

export default Character;

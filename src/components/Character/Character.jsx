import React, { Component } from "react";
import "./Character.css";
import { Star } from "@material-ui/icons";
class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorite: props.favorite
        };
    }

    changeFavorite = () => {
        let { data } = this.props;
        data.favorite = !data.favorite;
        this.setState({
            favorite: data.favorite
        });
    };

    render() {
        let { data } = this.props;
        return (
            <div className="characterContainer">
                <img className="characterImage" src={data.image} />
                <div className="charNum">Number: {data.charNum}</div>
                <div className="charNum">Weight: {data.weight}</div>
                <div className="charNum">Franchise: {data.franchise}</div>
                <div className="charNum">Type: {data.type}</div>
                <button
                    style={{
                        backgroundColor: "transparent",
                        color: data.favorite ? "yellow" : "white"
                    }}
                    onClick={this.changeFavorite}
                >
                    <Star
                        style={{
                            color: data.favorite ? "yellow" : "white"
                        }}
                    />
                    Favorite!
                </button>
            </div>
        );
    }
}

export default Character;

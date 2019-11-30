import React, { Component } from "react";
import "./App.css";
import marioImg from "./images/mario.jpg";
import donkeyKongImg from "./images/donkeyKong.jpg";
import linkImg from "./images/link.jpg";
import samusImg from "./images/samus.jpg";
import yoshiImg from "./images/yoshi.jpg";
import kirbyImg from "./images/kirby.jpg";
import foxImg from "./images/fox.jpg";
import pikachuImg from "./images/pikachu.jpg";
import nessImg from "./images/ness.jpg";
import captainFalconImg from "./images/captainFalcon.jpg";
import bowserImg from "./images/bowser.jpg";
import peachImg from "./images/peach.jpg";
import iceClimbersImg from "./images/iceClimbers.jpg";
import zeldaImg from "./images/zelda.jpg";
import jigglyPuffImg from "./images/jigglyPuff.jpg";
import FilteredList from "./components/FilteredList/FilteredList";
let characters = [
    {
        name: "Mario",
        weight: "Medium",
        franchise: "Mario",
        charNum: 1,
        type: "Hero",
        image: marioImg,
        favorite: false
    },
    {
        name: "Donkey Kong",
        weight: "Heavy",
        franchise: "Mario",
        charNum: 2,
        type: "Villian",
        image: donkeyKongImg,
        favorite: false
    },
    {
        name: "Link",
        weight: "Medium",
        franchise: "Zelda",
        charNum: 3,
        type: "Hero",
        image: linkImg,
        favorite: false
    },
    {
        name: "Samus",
        weight: "Heavy",
        franchise: "Metroid",
        charNum: 4,
        type: "Hero",
        image: samusImg,
        favorite: false
    },
    {
        name: "Yoshi",
        weight: "Medium",
        franchise: "Mario",
        charNum: 5,
        type: "Hero",
        image: yoshiImg,
        favorite: false
    },
    {
        name: "Kirby",
        weight: "Light",
        franchise: "Kirby",
        charNum: 6,
        type: "Hero",
        image: kirbyImg,
        favorite: false
    },
    {
        name: "Fox",
        weight: "Light",
        franchise: "Star Fox",
        charNum: 7,
        type: "Hero",
        image: foxImg,
        favorite: false
    },
    {
        name: "Pikachu",
        weight: "Light",
        franchise: "Pokemon",
        charNum: 8,
        type: "Hero",
        image: pikachuImg,
        favorite: false
    },
    {
        name: "Ness",
        weight: "Light",
        franchise: "EarthBound",
        charNum: 9,
        type: "Hero",
        image: nessImg,
        favorite: false
    },
    {
        name: "Captain Falcon",
        weight: "Medium",
        franchise: "F-Zero",
        charNum: 10,
        type: "Hero",
        image: captainFalconImg,
        favorite: false
    },
    {
        name: "Jiggly Puff",
        weight: "Light",
        franchise: "Pokemon",
        charNum: 11,
        type: "Hero",
        image: jigglyPuffImg,
        favorite: false
    },
    {
        name: "Peach",
        weight: "Medium",
        franchise: "Mario",
        charNum: 12,
        type: "Hero",
        image: peachImg,
        favorite: false
    },
    {
        name: "Bowser",
        weight: "Heavy",
        franchise: "Mario",
        charNum: 13,
        type: "Villian",
        image: bowserImg,
        favorite: false
    },
    {
        name: "Ice Climbers",
        weight: "Light",
        franchise: "Ice Climbers",
        charNum: 14,
        type: "Hero",
        image: iceClimbersImg,
        favorite: false
    },
    {
        name: "Zelda",
        weight: "Medium",
        franchise: "Zelda",
        charNum: 15,
        type: "Hero",
        image: zeldaImg,
        favorite: false
    }
];
class App extends Component {
    render() {
        return (
            <div className="App">
                <FilteredList items={characters} />
            </div>
        );
    }
}

export default App;

import React, { Component } from "react";
import { DropdownButton, Dropdown, Button } from "react-bootstrap";
import List from "../List/List";
import "./FilteredList.css";
class FilteredList extends Component {
    constructor(props) {
        super(props);

        //The state is just a list of key/value pairs (like a hashmap)
        //TODO (FilteredList): Add an additional state variable within this.state called "type" and set it to a default value
        this.state = {
            search: "",
            weight: "",
            franchise: "",
            type: "",
            sortFuction: this.normalSort
        };
    }

    // sets the weight filter state
    weightFilter = event => {
        this.setState({ weight: event, franchise: "", type: "" });
    };

    // sets the franchise filter state
    franchiseFilter = event => {
        this.setState({ weight: "", franchise: event, type: "" });
    };

    // sets the type filter state
    typeFilter = event => {
        this.setState({ weight: "", franchise: "", type: event });
    };

    // choosing the sort function
    sortSelection = event => {
        if (event === "Name Alphabetical (A-Z)") {
            this.setState({ sortFuction: this.alphabeticalSort });
        }
        if (event === "Name Alphabetical (Z-A)") {
            this.setState({ sortFuction: this.reverseAlphabeticalSort });
        }
        if (event === "Character Number (1-15)") {
            this.setState({ sortFuction: this.normalSort });
        }
        if (event === "Character Number (15-1)") {
            this.setState({ sortFuction: this.reverseSort });
        }
    };

    // sort by number 1-15
    normalSort = (first, second) => {
        return first.charNum - second.charNum;
    };

    // sort by number 15-1
    reverseSort = (first, second) => {
        return second.charNum - first.charNum;
    };

    // sort alphabetically
    alphabeticalSort = (first, second) => {
        return first.name > second.name ? 1 : -1;
    };

    // sort reverse alphabetically
    reverseAlphabeticalSort = (first, second) => {
        return first.name > second.name ? -1 : 1;
    };

    // revert everything
    revertList = event => {
        this.setState({
            weight: "",
            franchise: "",
            type: "",
            sortFuction: this.normalSort
        });
    };

    /*
     * This function should determine whether the item being passed in matches the type
     * that we are filtering on.
     * Input: An element from your List component
     * Output: true or false
     */
    matchesFilterType = item => {
        // TODO: add conditions to check if item type is equal to selected type
        let check = true;
        if (this.state.weight !== "" && item.weight !== this.state.weight) {
            return false;
        }
        if (
            this.state.franchise !== "" &&
            item.franchise !== this.state.franchise
        ) {
            return false;
        }
        if (this.state.type !== "" && item.type !== this.state.type) {
            return false;
        }
        return check;
    };

    // sort the list according to the state sort function
    sortList = (first, second) => {
        return this.state.sortFuction(first, second);
    };

    /*
     * The function is passed into a builtin filter() function. filter() calls this function on every element
     * in the list. If this fucntion returns true for a given element, filter() will add that element to its
     * return list.
     */
    filterAndSearch = character => {
        return (
            character.name.toLowerCase().search(this.state.search) !== -1 &&
            this.matchesFilterType(character)
        );
    };

    //Sets the state whenever the user types on the search bar
    onSearch = event => {
        this.setState({ search: event.target.value.trim().toLowerCase() });
    };

    render() {
        let weight = ["Heavy", "Medium", "Light"];
        let franchise = [
            "Mario",
            "Zelda",
            "Metroid",
            "Kirby",
            "Star Fox",
            "Pokemon",
            "EarthBound",
            "F-Zero",
            "Ice Climbers"
        ];
        let type = ["Hero", "Villian"];
        let sort = [
            "Name Alphabetical (A-Z)",
            "Name Alphabetical (Z-A)",
            "Character Number (1-15)",
            "Character Number (15-1)"
        ];
        return (
            <div className="FilteredListContainer">
                <h1>Smash Melee Filter!</h1>
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search by character name!"
                    onChange={this.onSearch}
                />
                <div className="filterBar">
                    <DropdownButton title="Weight" id="dropdown-basic-button">
                        {weight.map(item => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    onSelect={this.weightFilter}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <DropdownButton
                        title="Franchise"
                        id="dropdown-basic-button"
                    >
                        {franchise.map(item => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    onSelect={this.franchiseFilter}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <DropdownButton title="Type" id="dropdown-basic-button">
                        {type.map(item => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    onSelect={this.typeFilter}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <DropdownButton title="Sort" id="dropdown-basic-button">
                        {sort.map(item => {
                            return (
                                <Dropdown.Item
                                    eventKey={item}
                                    onSelect={this.sortSelection}
                                >
                                    {item}
                                </Dropdown.Item>
                            );
                        })}
                    </DropdownButton>
                    <Button
                        id="dropdown-basic-button"
                        onClick={this.revertList}
                    >
                        Revert
                    </Button>
                </div>
                <List
                    items={this.props.items
                        .filter(this.filterAndSearch)
                        .sort(this.sortList)}
                />
            </div>
        );
    }
}

export default FilteredList;

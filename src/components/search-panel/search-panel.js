import React, { Component } from 'react';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        }
        this.onSearchChange = this.onSearchChange.bind(this)
    }

    onSearchChange(e) {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Поиск по записям"
                onChange={this.onSearchChange}
            />
        )
    }
}

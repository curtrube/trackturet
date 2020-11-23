import React, { Component } from 'react';

export class Create extends Component {
    static displayName = Create.name;

    constructor() {
        super();
        this.state = { summary:'', description:'', createdDate: Date()};
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state.summary);
        console.log(this.state.description);

        const data = {summary:this.state.summary, description:this.state.description, createdDate: new Date()}

        fetch('api/issue', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(response => response.json())
            .then(data => console.log(data))
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group row">
                        <label htmlFor="issueSummary" className="col-sm-1 col-form-label">Summary</label>
                        <div className="col-sm-8">
                            <input
                                id="issueSummary"
                                className="form-control"
                                type="text"
                                name="summary"
                                placeholder="Summary"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="issueDescription" className="col-sm-1 col-form-label">Description</label>
                        <div className="col-sm-8">
                            <input
                                type="text"
                                className="form-control"
                                id="issueDescription"
                                name="description"
                                placeholder="Description"
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <input type="submit" />
                </form>
            </div>
        );
    }
}
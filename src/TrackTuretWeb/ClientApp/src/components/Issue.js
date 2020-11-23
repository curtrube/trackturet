import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Issue extends Component {

    constructor(props) {
        super(props)
        this.state = { issues: [], loading: true };
    }

    componentDidMount() {
        this.getIssues();
    }

    static renderIssues(issues) {
        return (
            <div>
                {issues.map(issue =>
                    <div className="card mb-3" key={issue.issueId}>
                        <div className="card-header">Issue Type: Story, Bug, Request, Docs</div>
                        <div className="card-body">
                            <h6 className="card-title"><Link to='/create'>Issue: {issue.issueId}</Link></h6>
                            <h5 className="card-subtitle mb-1">{issue.summary}</h5>
                            <p className="card-text text-muted">{issue.description}</p>
                            <p className="card-text text-muted">{issue.createdDate}</p>
                        </div>
                    </div>
                )}
            </div>

        );
    }

    render () {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Issue.renderIssues(this.state.issues);

        return (
            <div>
                <h1>All Issues</h1>
                {contents}
            </div>
        );
    }

    async getIssues() {
        const response = await fetch('api/issue');
        const data = await response.json();
        this.setState({ issues: data, loading: false });
    }

}


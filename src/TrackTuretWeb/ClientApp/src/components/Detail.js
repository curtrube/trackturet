import React, { Component } from 'react';

export class Detail extends Component {

    render() {
        fetch('api/issue/1')
        .then(res => res.json())
        .then(data => console.log(data));
        return (
            <div>
                <div class="card mb-3">
                <h5 class="card-header">PCAT-1785</h5>
                <div class="card-body">
                    <h5 class="card-title">Summary: Network is down at customer site</h5>
                    <p class="card-text" id="description">Description:</p>
                    <p class="card-text" id="description">Network connectivity to customer site A is down.</p>
                    <h6 class="card-subtitle mb-2 text-muted">Project: Top Secret Government</h6>
                </div>
                <div class="card-footer">
                    Card footer
                </div>
                </div>
            </div>
        );
    }
}
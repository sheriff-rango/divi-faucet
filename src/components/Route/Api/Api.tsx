import './Api.scss';
import React, { Component } from 'react';

/*
* The Api component for the /api page
*/
export class Api extends Component {
    public interval: any;

    public constructor(props: any) {
        super(props);
    }

    public render() {
        return(
            <div className="api-wrap">
                <h3>API Reference</h3>
                <h4>
                    [GET]
                    https://faucet-api.diviproject.org/print?address=[string]&amount=[number]
                </h4>
                <h5>Query Parameters</h5>
                <p className="label">
                    Address: String
                </p>
                <p>Your Divi address. Please note you can only print max 100 Divis to an address every hour.</p>
                <p className="label">
                    Amount: Number
                </p>
                <p>
                    The amount of Divis to give to your address. Please note you can only print 100 Divis every hour.
                </p>
            </div>
        );
    }
}

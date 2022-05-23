import './Home.scss';
import React, { Component } from 'react';

import logo from '../../../Assets/logo.png';
import { Supply, Blocks, Print } from '../../../rpc.api';

/*
* The properties to the Home Component
*/
export type HomeProps = {

};

/*
* The key values of the state in the Home Componet
*/
export type HomeState = {
    pageError: boolean;
    printed: number;
    blocks: number;
    address: string;
    amount: number;
    error: boolean;
    message: string;
}

/*
* The Home component which is for the / route
*/
export class Home extends Component<HomeProps, HomeState> {
    public interval: any;

    public constructor(props: any) {
        super(props);
        this.state = {
            pageError: false,
            printed: 0,
            blocks: 0,
            address: '',
            amount: 0,
            error: false,
            message: '',
        };
    }

    /*
    * Query data every 5 seconds from the network
    */
    public componentDidMount() {
        this.retrieveData();

        this.interval = setInterval(() => {
            this.retrieveData();
        }, 5000);
    }

    /*
    * Clear the interval when switching pages
    */
    public componentWillUnmount() {
        clearInterval(this.interval);
    }

    /*
    * Queries supply and block data from the RPC file
    */
    public async retrieveData() {
        try {
            const printed = await Supply();
            const blocks = await Blocks();

            if (printed.errno) {
                this.setState({ pageError: true });
            } else {
                this.setState({ pageError: false, printed, blocks });
            }

        } catch (error) {
            this.setState({ error: true, message: error });
            setTimeout(() => {
                this.setState({ error: false });
            }, 3000);
        }
    }

    /*
    * Prints divi to a specified address. Will throw an error if invalid.
    */
    public async print() {
        try {
            const printed = await Print(this.state.address, this.state.amount);
            if (printed === true) {
                this.setState({ error: false, message: `Successfully printed ${this.state.amount} Divis`, amount: 0 });
            } else {
                this.setState({ error: true, message: printed });
                setTimeout(() => {
                    this.setState({ error: false });
                }, 3000);
            }
        } catch (error) {
            this.setState({ error: true, message: error });
            setTimeout(() => {
                this.setState({ error: false });
            }, 3000);
        }
    }

    /*
    * Updates the address input
    */
    public setAddress(e: any) {
        this.setState({ address: e.target.value });
    }

    /*
    * Updates the amount input
    */
    public setAmount(e: any) {
        this.setState({ amount: e.target.value });
    }

    /*
    * Formats numeric values with commas.
    */
    public format(x: number): string {
        if (!isNaN(x)) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return parts.join(".");
        } else {
            return "error";
        }
    }

    public render() {
        return(
            <div className="page-wrap">
                <div className="page-error">
                    <h2>The Faucet is having issues connecting to the network</h2>
                    <p>
                        If it's still down after a few hours, please reach out to us on

                        <a href="https://github.com/DiviProject/Faucet/issues">
                            Github
                        </a>

                    </p>
                </div>

                <div className="faucet">
                    <h2>Print Testnet DIVI Coins</h2>
                    <h3>
                        The faucet has
                        <div className="cd-printed">
                            <img src={logo} alt="logo" title="logo" />
                            {this.format(this.state.printed)}
                        </div>
                        DIVIs in
                        <div className="cd-blocks">{this.format(this.state.blocks)}</div>
                        blocks
                    </h3>
                    <p>Testnet Divi Address</p>
                    <input type="text" placeholder="Address" onChange={this.setAddress.bind(this)}/>
                    <p>Amount of Divis (max 100)</p>
                    <div className="inline-input">
                        <input type="number" placeholder="# of Divis" onChange={this.setAmount.bind(this)}/>
                        <a className="button" onClick={this.print.bind(this)}>Print</a>
                        <div className={`message ${this.state.error ? 'active' : ''}`}>
                            {this.state.message}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

import './Footer.scss';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/logo.png';

/*
* The footer react component
*/
export class Footer extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <footer>
                <div className="wrapper">
                    <div className="fhead">
                        <img src={logo} alt="logo" title="logo" />
                        <h3>Divi Faucet</h3>
                    </div>
                    <div className="menu-items">
                        <Link className="link" to="/">Faucet</Link>
                        <Link className="link" to="/api">Faucet API</Link>
                        <a className="link" href="https://diviscan.io">Block Explorer</a>
                    </div>
                </div>
            </footer>
        );
    }
}

import './Header.scss';
import React, { Component } from 'react';
import logo from '../../../Assets/logo.png';

/*
* The header React component
*/
export class Header extends Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <header>
                <div className="wrapper">
                    <div className="brand">
                        <img src={logo} alt="logo" title="logo"/>
                        <h1>Divi Faucet</h1>
                    </div>
                </div>
            </header>
        );
    }
}

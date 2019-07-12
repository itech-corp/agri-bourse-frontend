import React, { Component } from 'react';
import Navbar from '../components/Header/Navigation/Navigationbar';

class Layout extends Component {

    render() {

        return(
            <main>
                <Navbar/>
                {this.props.children}
            </main>
        )
    }
}

export default Layout;
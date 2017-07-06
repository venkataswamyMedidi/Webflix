import React from 'react';
import {Header} from "./Header";
import {Footer} from "./Footer";
import {Link} from 'react-router';
export class Root extends React.Component {


    render() {
        return (
            <div>
                <Header/>
                <div className="root-children">{this.props.children}</div>
                <Footer/>
            </div>
        );
    }
}
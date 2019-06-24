import React, {Component} from 'react';
import { Fragment } from 'react';

export class Sidebar extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(

            <Fragment>
                <nav className="sidebar">
                    <input className="sidebar__search" type="search" placeholder="Search..." />
                    <ul className="sidebar__nav" type="none">
                        <li className="sidebar__nav__items"><a className="sidebar__nav__link">Home</a></li>
                        <li className="sidebar__nav__items"><a className="sidebar__nav__link">Browse</a></li>
                        <li className="sidebar__nav__items"><a className="sidebar__nav__link">Radio</a></li>
                        <li className="sidebar__nav__items"><a className="sidebar__nav__link">Your Playlist</a></li>
                        <li className="sidebar__nav__items"><a className="sidebar__nav__link">Discover</a></li>

                    </ul>
                </nav>
            </Fragment>
            

        );
    }
}
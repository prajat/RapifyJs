import React, {Component} from 'react';
import { Fragment } from 'react';

export class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state={
            links:[
                {id:1,name:'Home'},
                {id:2,name:'Browse'},
                {id:3,name:'Radio'},
                {id:4,name:'Your Playlist'},
                {id:5,name:'Discover'}
            
            ]
        }


    }

    render(){
        return(

            <Fragment>
                 <nav className="sidebar">
                    <input className="sidebar__search" type="search" placeholder="Search..." />
                        <ul className="sidebar__nav" type="none">
                        {
                            this.state.links.map((link)=>{
                                return(

                                    <li className="sidebar__nav__items"><a className="sidebar__nav__link">{link.name}</a></li>
                                );
                            })
                        }
                        </ul>
                </nav>
                
                
            </Fragment>
            

        );
    }
}
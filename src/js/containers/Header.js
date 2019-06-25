import React, {Component} from 'react';
import { Fragment } from 'react';

export class Header extends Component{
    constructor(props){
        super(props);
        
    }

    render(){
        return(

            <Fragment>
                <header className="header">
                    <div className="header__logo">
                        <img className="header__logo__img" src="../src/assets/images/logo.png" /> 
                        <h1 className="header__logo__text">Rapify</h1>
                    </div>

                    <ul className="navbar" type="none">
                        <li className="navbar__items"><a className="navbar__link">Premium</a></li>
                        <li className="navbar__items"><a className="navbar__link">Help</a></li>
                        <li className="navbar__items"><a className="navbar__link">Download</a></li>
                        <li className="navbar__items"><a className="navbar__link">Log in</a></li>
                        <li className="navbar__items"><a className="navbar__link">Sign up</a></li>

                    </ul>

                </header>
            </Fragment>
            

        );
    }
}
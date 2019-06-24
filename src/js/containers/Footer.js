import React, {Component} from 'react';
import { Fragment } from 'react';

export class Footer extends Component{
    constructor(props){
        super(props);


    }

    render(){
        return(

            <Fragment>
                <footer className="footer">
                    <ul className="footer__list" type="none">
                        <li className="footer__list__items"><a className="footer__list__links">Legal</a></li>
                        <li className="footer__list__items"><a className="footer__list__links">Privacy Center</a></li>
                        <li className="footer__list__items"><a className="footer__list__links">Privacy Policy</a></li>
                        <li className="footer__list__items"><a className="footer__list__links">Cookies</a></li>
                        <li className="footer__list__items"><a className="footer__list__links">About Ads</a></li>

                    </ul>
                </footer>
            </Fragment>
            

        );
    }
}
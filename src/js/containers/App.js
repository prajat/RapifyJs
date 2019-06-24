import React, {Component} from 'react';
import { Fragment } from 'react';
import { Header } from './Header';
import { section as Section } from '../views/Section';
import { Footer } from './Footer';

export class App extends Component{

    render(){

        return(
            <Fragment>

                <Header />
                <Section />
                <Footer />

            </Fragment>

        );
    }


}


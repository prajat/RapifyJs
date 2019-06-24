import React, {Component} from 'react';
import { Fragment } from 'react';
import {Sidebar} from '../containers/Sidebar';
import {Cards} from '../containers/Cards';

export const section =()=>{

    return(

        <Fragment>
            <section className="main-container">
                
                <Sidebar />

                <div className="main-container__content">
                    <Cards />
                </div>

            </section>

        </Fragment>
            

        );   
}
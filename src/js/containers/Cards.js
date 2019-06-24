import React, {Component} from 'react';
import { Fragment } from 'react';
import {card as Card} from '../views/Card';

export class Cards extends Component{
    constructor(props){
        super(props);
        this.state={
            cardItems:[
                { id:1 , pic:'1' , albumName:'SYRE (2017)' , albumDesc:'Syre is the debut studio album by American rapper Jaden. It was released on November 17, 2017, through MSFTSMusic and Roc Nation under the partnership between Interscope Records and Republic Records. The album debuted at number 24 on the U.S Billboard 200 for the chart dated December 9, 2017' },
                { id:2 , pic:'2' , albumName:'The Sunset Tapes:A cool Tape Story (2018)',albumDesc:'he Sunset Tapes: A Cool Tape Story is the third mixtape by American rapper Jaden, released on November 17, 2018, through MSFTSMusic and Roc Nation under the partnership between Interscope Records and Republic Records' },
                { id:3 , pic:'3' , albumName:'Death Race For Love (2019)',albumDesc:'Death Race for Love is the second studio album by American rapper Juice Wrld. It was released on March 8, 2019, through Grade A Productions and Interscope Records. It follows his two 2018 projects: his solo project, Goodbye & Good Riddance, and his collaborative mixtape with Future, Wrld on Drugs.' },
                { id:4 , pic:'4' , albumName:'ERYS IS COMING (2019)',albumDesc:'However individuals and individual outlets felt, Syre was certainly Smit\'s declaration of intent. It was bold enough to win attention and fans. Two years later many are ready to see what\'s next. If the three tracks on ERYS IS COMING are any indication, I think we\'re in store for a minimalist project that juxtaposes explosive trap with slashes of vulnerability and packing a sly density. ' }

            ]
        }
}

    render(){
        
        return(
            <Fragment>
                {this.state.cardItems.map((card)=>{
                    return(

                        <Card 
                        key={card.id}
                        id={card.id}
                        alname={card.albumName}
                        aldesc={card.albumDesc}
                        pic={card.pic} />
                    );
                })

                }
            </Fragment>
        );
    }
}
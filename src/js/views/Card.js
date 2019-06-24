import React, {Component} from 'react';
import { Fragment } from 'react';

export const card=(props)=>{
    return(
        <Fragment>
            <div className="card">
                <div className={`card__pic--${props.pic}`}></div>
                <div className="card__album">
                    <h1 className="card__album__name">{props.alname}</h1>
                    <div className="card__album__description">
                        <p>{props.aldesc}</p>
                        <audio className="card__audio" controls>

                            <source src="https://hiphopdes.com/uploads/2019/04/Jaden_Smith_Pass.mp3" type="audio/mpeg" />
                        </audio>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}
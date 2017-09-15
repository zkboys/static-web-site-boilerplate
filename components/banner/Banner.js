import React from 'react';
import style from './style';

export default (props) => {
    return (
        <div>
            <style jsx>{style}</style>
            <div className="top-banner">
                <img src={props.src} alt={props.alt}/>
                <h1 className="top-banner-title">
                    {props.children}
                </h1>
            </div>
        </div>
    );
}
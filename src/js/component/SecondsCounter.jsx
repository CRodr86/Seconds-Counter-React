import React from "react";
import { FaRegClock } from "react-icons/fa";


const SecondsCounter = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-1 clock">
                    <a><FaRegClock /></a>
                </div>
                <div className="col-1">
                    <a>{Math.floor(props.count / 1000) % 10}</a>
                </div>
                <div className="col-1">
                    <a>{Math.floor(props.count / 100) % 10}</a>
                </div>
                <div className="col-1">
                    <a>{Math.floor(props.count / 10) % 10}</a>
                </div>
                <div className="col-1">
                    <a>{Math.floor(props.count) % 10}</a>
                </div>
            </div>
        </div>
    );
};

export default SecondsCounter;
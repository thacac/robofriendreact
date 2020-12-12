import React, { Component } from 'react';

export default class MovieElement extends Component{
    render(){
        return (
        <div className="w-25 p-2">
            <div className="card">
                <img src="https://i.pinimg.com/originals/bb/12/19/bb121995dde4f080dbaa8b1245fcd0fb.jpg" className="card-img-top" alt="gladiator" />
                <div className="card-body">
                    <h5 className="card-title">Gladiator</h5>
                    <p className="card-text">jvoijvfsjvosjojoihvohvofsdhvoihvosivhnsifohfsiohvno</p>
                </div>
            </div>
        </div>
        );
    }

}
import React from 'react';
import { Component } from 'react';
import cats from '../cats.jpg';
import dogs from '../dogs.jpg';
import comingsoon from '../coming.png'

class Animals extends Component{
    render(){
   
        return(

            <div className="container">
            <div className="row">
            <div className="col-sm-6">
            <div class="card">
            <a href="/cats"><img width="400" height="400" src={cats} class="card-img-top" alt="..."/></a>
            </div>
            </div>
            <div className="col-sm-6">
            <div class="card">
            <a href="/dogs"><img width="400" height="400" src={dogs} class="card-img-top" alt="..."/></a>
            </div>
            </div>
            </div>
            <br/><br/>
            <div className="row">
            <div className="col-sm-6">
            <div class="card">
            <img width="400" height="400" src={comingsoon} class="card-img-top" alt="..."/>
            </div>
            </div>
            <div className="col-sm-6">
            <div class="card">
            <img width="400" height="400" src={comingsoon} class="card-img-top" alt="..."/>
            </div>
            </div>
            </div>
            </div>
        )

    }
}
export default Animals;
import React, { Component } from 'react'
import 'bootswatch/dist/solar/bootstrap.min.css'



export default class Cards extends Component {
    render() {
        const {Title, Poster, Year, Type} = this.props.movies
        return (
            <div className="container ms-1 text-center" >
                <div className="col">
                    <div className="card text-white bg-dark mb-3">
                        <img src={Poster} className="" alt="..." width="245px" height="300px" />
                        <div className="card-body">
                            <h5 className="card-title">{Title}</h5>
                            <h6 className= "card-subtitle mb-2 text-muted">{Year}</h6>

                        </div>

                    </div>
                </div>
                <h1>{Title} </h1>
            </div>
        )
    }
}

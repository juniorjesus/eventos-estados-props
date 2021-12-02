import React, { Component } from 'react'
import Cards from '../components/Cards'

export default class ListContainer extends Component {

    constructor(){
        super()
        this.state = {
            peli : []
        }
    }


    async componentDidMount() {
        const url = 'http://localhost:3004/peliculas'
        const res = await fetch(url)
        const data = await res.json()
        this.setState({peli:data})
    }
    
    render() {
        return (
            <div>
                 <h1>App de Películas!</h1>
                {
                    this.state.peli.map((movie, index)=> {
                        return(
                            < Cards  key={movie.id}movies={movie} />
                        )
                    })

                }
                
            </div>
        )
    }
}

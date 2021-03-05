import React, { useState, useEffect } from 'react'
import Sidebar from '../components/sidebar'
import Carousel from '../components/carousel'
import MovieList from '../components/movielist'
import { getMovies, getCategories } from '../actions'

class Home extends React.Component {

  // state = {
  //   movies: []
  // }

  //static function means you dont need to create an instance of the class to call this function  
  static async getInitialProps() {
    const movies = await getMovies()
    const categories = await getCategories()
    const images = movies.map((movie) => {
      return {
        id: `image-${movie.id}`,
        url: movie.cover,
        name: movie.name
      }
    })

    return {
      movies,
      images,
      categories
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      filter: 'all'
    }
  }

  // is called only on Client (browser...) 
  // componentDidMount() {
  //   getMovies().then((movies) => {
  //     this.setState({movies})
  //   })
  //   .catch((error) => {
  //     this.setState({errorMessage: error})
  //   })
  // }

  changeCategory = (category) => {
    this.setState({filter: category})
  }

  filterMovie = (movies) => {
    debugger
    if (this.state.filter === 'all') {
      return movies
    }
    return movies.filter((m) => {
      return m.genre && m.genre.includes(this.state.filter)
    })
  }

  render() {

    const { movies, images, categories } = this.props

    return (
        <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <Sidebar 
                changeCategory={this.changeCategory}
                activeCategory={this.state.filter}
                categories={categories}/>
              </div> 
              <div className="col-lg-9">
                <Carousel images={images}/>
                <h1>Displaying {this.state.filter} Movies</h1>
              <div className="row">
                <MovieList movies={this.filterMovie(movies) || []}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      )
  }
}


export default Home
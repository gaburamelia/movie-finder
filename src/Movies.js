import React from 'react';
import ReactDOM from 'react-dom';
import logoMovie from './logoMovie.gif';
import './App.css';

class Movies extends React.Component {
    constructor() {
        super();
        this.state = {
            movieName: ''
        };
    }
    
    render(){
        return (
        <div className="App" style={{marginTop : '0.5rem'}}>
          <header className="App-header">
            <img src={logoMovie} className="App-logo" alt="logo" />
            <div style={{display : 'flex'}}>
            <input value={this.state.movieName} onChange={this.updateMovieName} id="movie-name" placeholder="Movie Name"/>
            <button id="search-movie" style={{marginLeft : '2px'}} onClick={this.searchMovies}>
             Search
            </button>
            </div>
            <div style={{backgroundColor : 'white', marginTop: '1rem', 'color': 'black', padding: '1rem', display: 'none', width: '70%', maxWidth: '70%'}} id="movie-details"></div>
          </header>
        </div>
      );
    }
    
    updateMovieName = (evt) => {
        this.setState({
            movieName: evt.target.value
        });
    }
    
    searchMovies = () => {
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          // console.log(xhr.responseText);
          var result = JSON.parse(xhr.responseText);
          if(result.Response == 'True'){
              this.setMoviesList(result.Search);
          }else{
                ReactDOM.render(<p>No results for current search!</p>, document.getElementById('movie-details'));
                document.getElementById('movie-details').style.display = 'block';
          }
        })
        // open the request with the verb and the url
        xhr.open('GET', 'https://www.omdbapi.com/?s=' + this.state.movieName + '&apikey=6bb2d225');
        // send the request
        xhr.send();
    }
    
    setMoviesList(moviesList){
        var movies = [];
        for(let i = 0; i < moviesList.length; i++){
            movies.push(<li key={moviesList[i].imdbID} style={{display : 'flex', flexDirection: 'column'}}><div id={moviesList[i].imdbID} onClick={this.handleMovieDetails} className="movie-item" style={{display : 'flex', flexDirection: 'row'}}><img src={moviesList[i].Poster} style={{width: '3rem', height: '3rem', margin: 'auto'}}/><p style={{marginLeft: '0.5rem', width : '100%', textAlign : 'left'}}>{moviesList[i].Title} - {moviesList[i].Year}</p></div><div className="movie-details" id={'movie-details-' + moviesList[i].imdbID} style={{display : 'none'}}></div></li>);
        }
        
        var details = <ul style={{display: 'flex', flexDirection : 'column'}}>
        {movies}
        </ul>;
        ReactDOM.render(details, document.getElementById('movie-details'));
        document.getElementById('movie-details').style.display = 'block';
    }
    
    handleMovieDetails = (evt) =>{
        this.hideAllDetails();
        var key = evt.currentTarget.id;
        var element = document.getElementById('movie-details-' + key);
        
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds
        xhr.addEventListener('load', () => {
          // update the state of the component with the result here
          // console.log(xhr.responseText);
          var result = JSON.parse(xhr.responseText);
          this.setMoviesDetails(element, result);
        })
        // open the request with the verb and the url
        xhr.open('GET', 'https://www.omdbapi.com/?i=' + key + '&apikey=6bb2d225');
        // send the request
        xhr.send();
    }
    
    hideAllDetails = () => {
        var elements = document.getElementsByClassName('movie-details');

        for (var i = 0; i < elements.length; i++){
            elements[i].style.display = 'none';
        }
    }
    
    setMoviesDetails(element, movieDetails){
        var details = <div>
            <h5>{movieDetails.Title}</h5>
            <p>Score: {movieDetails.imdbRating}</p>
            <p>Plot: {movieDetails.Plot}</p>
        </div>;
        ReactDOM.render(details, element);
        element.style.display = 'block';
    }
}

export default Movies;
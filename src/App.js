import {useState,useEffect} from 'react';

import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';
<meta httpEquiv='Content Security Policy'  content="upgrade-insecure-requests"/>

// 45c50cc4

const API_URL = 'https://www.omdbapi.com?apikey=45c50cc4';

const movie1 = {
    
    Poster
: 
"https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
,Title
: 
"The Amazing Spiderman 2 Webb Cut"
,Type
: 
"movie"
,Year
: 
"2021"
,imdbID
: 
"tt18351128"
    


}
const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

 const searchMovies = async (title) => {
   const response = await fetch(`${API_URL}&s=${title}`);
   const data = await response.json();
   
   setMovies(data.Search);
}

     useEffect(() =>  {
       searchMovies('Spiderman');

     }, []);

  return (
   <div className="app">
    <h1>MovieLand</h1>
    
    <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          />

        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
          />
    </div>

      {
        movies?.length > 0
        ? (
            <div className="container">
             {movies.map((movie) => ( <MovieCard movie={movie}/>))}
      
      
            </div>

        ) : (
           <div className = "empty">
              <h2>No movies found</h2>
           
            </div>

        )

     }

 </div>
   );

}

export default App;
import React, { useState, useEffect } from 'react';
import './movies.css'
import axios from 'axios';


function Movies(props) {
    const [movies, setMovives] = useState([])
    const [keyword, setKeyword] = useState('')
    const [loading, setLoading] = useState(false)


    async function fetchMovies() {
        try {
            let response = await axios.get('http://www.omdbapi.com/?apikey=c8a7eee5&s=batman');
            const data = response.data.Search
            setMovives(data)

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMovies()
    }, [])





    const keywordChange = (e) => {
        setKeyword(e.target.value)
    }


    const searchMove = async () => {
        try {
            let response = await axios.get(`http://www.omdbapi.com/?apikey=c8a7eee5&s=${keyword}`);
            const data = response.data.Search
            setMovives(data)

        } catch (error) {
            console.log(error)
        }

    }

    return (

        <div className="container">

            <div className='search-title'>
                Search
            </div>

            <div class="input-group mb-3">
                <input type="text"
                    class="form-control" placeholder="Search for Movies" aria-label=""
                    aria-describedby="button-addon2" value={keyword} onChange={keywordChange} />
                <button class="btn btn-success" onClick={searchMove}
                    type="button" id="button-addon2">Search</button>
            </div>


            <div className="row">
                {movies.map((movie, index) => (
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 spacing-container ">
                        <div className="card-container">
                            <img src={movie.Poster} alt="" style={{ width: '100%', height: '50%' }} />
                            <div style={{ color: '#FFFFFF', textAlign: 'center' }}>{movie.Title}</div>
                            <div style={{ color: '#FFFFFF', textAlign: 'center' }}>{movie.Type}</div>
                            <div style={{ color: '#FFFFFF', textAlign: 'center' }}>{movie.Year}</div>
                        </div>

                    </div>

                ))}
            </div>
        </div>


    );
}

export default Movies;

import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"
import Movie from "../components/movie";

function Detail(){
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])
    const {id} = useParams()
    const getMovies = async() => {
        const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovies(json.data.movies)
        setLoading(false)
        console.log(json)

    }
    


    useEffect(() => {
        getMovies()
    }, [])
    

    return (
        <div>
            {loading ? <h1>Loading...</h1>:
            <div>
                <h1>Detail Page</h1>
                {movies&&movies.map((movie) => <Movie 
                key={movie.id} 
                id={movie.id}
                coverImg={movie.medium_cover_image} 
                title={movie.title} 
                summary={movie.summary} 
                genres={movie.genres} />)}
            </div>}
        </div>
    )
}

export default Detail
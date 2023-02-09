import { useState,useEffect } from "react"
import {useParams} from "react-router-dom"
import Movie from "../components/movie";

function Detail(){
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState({})
    const {id} = useParams()
    const getMovies = async() => {
        const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        setMovies(json.data.movie)
        setLoading(false)

        
    }
    console.log(movies)
    


    useEffect(() => {
        getMovies()
    }, [])
    

    return (
        <div>
            {loading ? <h1>Loading...</h1>:
            <div>
                <h1>Detail Page</h1>
                <hr/>
                <Movie
                key={movies.id}
                id={movies.id}
                year={movies.year}
                coverImg={movies.large_cover_image}
                title={movies.title}
                summary={movies.description_intro}
                genres={movies.genres} />
            </div>}
        </div>
    )
}

export default Detail
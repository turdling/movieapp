
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getMovieById, deleteMovie } from '../../../actions'

const Movie = (props) => {
    const router = useRouter()
    const { id } = router.query
    const { movie } = props

    const handleDelete = (id) => {
        deleteMovie(id).then(() => {
            //handle then later
            router.push('/')
        })
    }


    return (
        <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{ movie.name }</h1>
                <p className="lead">{movie.description}</p>
                <hr className="my-4" />
                <p>{movie.genre}</p>
                <button className="btn btn-primary btn-lg mr-2" href="#" role="button">Learn more</button>
                <button onClick={() => handleDelete(id)} className="btn btn-danger btn-lg mr-2" href="#" role="button">Delete</button>
                <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
                    <button className="btn btn-warning btn-lg" role="button">Edit</button>
                </Link>
                
            </div>
            <p className="desc-text">
                {movie.longDesc}
            </p>
            <style jsx>
                {`.desc-text{
                    font-size: 16px;
                }`}
            </style>
        </div>
    )
}

Movie.getInitialProps = async ({query}) => {
    const movie = await getMovieById(query.id)
    return { movie }
}

export default Movie





const Movie = async ({ params }) => {
    const { movie } =  params

    
    return (
        <div>
            <h1>{movie}</h1>
        </div>
    )
}

export default Movie
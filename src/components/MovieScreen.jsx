const movieDisplay = movieList.map((movie, index) => {
    return <MovieCard movie={movie}/>
})

return (
    <div className="page">
        <h1>Devmountain's Movie Theatre</h1>
        <h3>Add a movie to your watchlist!</h3>
        <div className="movie-container">
            {movieDisplay}
        </div>
    </div>
)
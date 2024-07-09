function MovieDetails(props){
    return(
        <div>
            <p>Nome: {props.author}</p>
            <p>Filme favorito: {props.favoriteMovie}</p>
            <br />
        </div>
    )
}

export default MovieDetails
// import { API_URL } from "../app/(home)/page";
import {API_URL} from "../app/constants";
import styles from "../styles/movie-info.module.css"

export async function getMovie(id:string) {
    console.log(`Fetching movies: ${Date.now()}`);
    // await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`${API_URL}/${id}`)
    return response.json();
}


export default async function MovieInfo({id} : {id: string}){
    const movie = await getMovie(id);
    const vote_average = movie.vote_average.toFixed(1);
    // return <h6>{JSON.stringify(movie)}</h6>
    return <div className={styles.container}>
        <img className={styles.poster} src={movie.poster_path} alt={movie.title}/>
        <div className={styles.info}>
            <h1 className={styles.title}>{movie.title}</h1>
            <h3>{vote_average}</h3>
            <p>{movie.overview}</p>
            <a href={movie.homepage} target={"_blank"} >HomePage &rarr;</a>
        </div>
    </div>
}
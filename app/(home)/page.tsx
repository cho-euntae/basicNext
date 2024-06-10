// import { useState, useEffect } from "react"

import Link from "next/link";

export const metadata = {
    title: 'Home'
  }

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
    // await new Promise((resolve)=>setTimeout(resolve,1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function Hompage(){
    const movies = await getMovies();
// export default function Page() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState();
    // const getMovies = async () => {
    //     const response = await fetch("https://nomad-movies.nomadcoders.workers.dev/movies");
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // }
    // useEffect(()=> {
    //     getMovies();
    // },[]);
    // return (
    //     <div>
    //         {isLoading ? "Loading.." : JSON.stringify(movies)}
    //     </div>
    // )

    return (
        <div>
            {/* {{JSON.stringify(movies)}} */}
            {movies.map(movie => <li key={movie.id}><Link href={`/movies/${movie.id}`} >{movie.title}</Link></li>)}
        </div>
    )
}
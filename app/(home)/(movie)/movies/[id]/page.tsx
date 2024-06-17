//노마더코더 API 주소 : nomad-movies.nomadcoders.workers.dev

import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../../components/movie-info";
import MovieVideos from "../../../../../components/movie-videos";

interface IParams {
    params: {id: string};
}

export async function generateMetadata({params:{id}} : IParams){
    // 최신 NextJs 에서 메타데이터 받을때 미리 데이터를 받아온다면
    // 캐싱이 되기때문에 다시 fetch 하지 않는다. 그래서 더 빨리 사용자가 볼 수 있음.
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

// export default function MovieDetail(props){
export default async function MovieDetailPage(
    {
        params:{id},
    }: IParams){
    // console.log("console props.params.id = "+props.params.id);
    // console.log(props);
    // console.log("start fetching");
    // 동시에 시작해서 끝나면 화면 보여줌.
    // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
    // console.log("end fetching");
    // return <h1>{movie.title}</h1>
    
    // 같이 실행되서 빠른놈부터 나옴.
    return <div>
        <h1>Movie detail page</h1>
        <Suspense fallback={<h1>Loading movie info</h1>}>
            <MovieInfo id={id}/>
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
            <MovieVideos id={id}/>
        </Suspense>
    </div>
}


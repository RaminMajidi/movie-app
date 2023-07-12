import { Suspense } from "react";
import Loading from "./Loading";
import HomeBaner from "@/components/home/HomeBaner";
import NotFound from "./not-found";
import HomeMovies from "@/components/home/HomeMovies";
import HomeTvs from "@/components/home/HomeTvs";

export const metadata = {
  title: 'Movie-App | Home',
}

export default async function Home() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    next: { revalidate: 60 * 60 * 24 },
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
    }
  });
  if (res.status != 200) {
    return NotFound();
  }

  const data = await res.json()

  return (
    <>
      <Suspense fallback={<Loading />}>
        <HomeBaner data={data?.results} />
        <HomeMovies />
        <HomeTvs />
      </Suspense>
    </>
  )
}


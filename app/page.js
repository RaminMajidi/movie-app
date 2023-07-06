import { Suspense } from "react";
import Loading from "./Loading";
import HomePage from "@/components/home/HomePage";

export default async function Home() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    next: { revalidate: 60 * 60 * 24 },
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
    }
  });
  const data = await res.json()

  return (
    <>
      <Suspense fallback={<Loading/>}>
        <HomePage data={data?.results} />
      </Suspense>
    </>
  )
}


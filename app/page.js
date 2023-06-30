import HomeSlider from "@/components/homeSlider/HomeSlider"
export default async function Home() {
  const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
    }
  });
  const data = await res.json()

  return (
    <>
      <HomeSlider data={data} />
    </>
  )
}


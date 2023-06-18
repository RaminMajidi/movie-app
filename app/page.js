import HomeSlider from "@/components/homeSlider/HomeSlider"
import { getData } from "@/service/HeaderQuery"

export default async function Home() {

  const data = await getData('/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc')

  return (
    <>
    <HomeSlider key={"test"} data={data} title={"Now Playing"}/>
    </>
  )
}

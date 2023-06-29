import HomeSlider from "@/components/homeSlider/HomeSlider"
import { Result } from "postcss";

export default async function Home() {

  const getDat = async () =>{
    let result = [];
    const res = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',{
      method: 'GET',
      headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
      }
    });
    if(res.status === 200){
      result =  await res.json()
      return result;
    }
    else{
      return result;
    }
     
  }
  const data = await getDat();


  return (
    <>
    <HomeSlider key={"test"} data={data}/>
    </>
  )
}

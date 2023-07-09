import NotFound from "@/app/not-found"
import AllSection from "@/components/moviesItem/AllSection"


const AllMovie = async ({params}) => {

    const page = +params.num
    if(page < 1 || page > 200 ){
        return NotFound();
    }
    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, {
        next: { revalidate: 60 * 60 * 6 },
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
        }
      });
      if(res.status !== 200){
        return NotFound();
      }
      const data = await res.json()

    return(
       <AllSection data={data} category={'movie'}/>
    )

}

export default AllMovie
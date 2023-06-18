
export const option = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlODI3ZWIwYWMyMGM2NjNlZjA0ZGVjMDRmNzQ2MDAyZCIsInN1YiI6IjY0NjEyYzJhYzY4YjY5MDBmYzJhMDMyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8T3tLC8fjQtRPAru3KVmwAbUTy0m3V0o4zbJ9ToSYYE`
    }
}

export const getData = async (url)=>{
  const res = await  fetch(`https://api.themoviedb.org/${url}`,option);
  if(res.status === 200){
   const data = await res.json();
   return data
  }
  
}
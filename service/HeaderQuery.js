
export const option = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.ACCIC_TOKEN}`
    }
}

export const getData = async (url)=>{
  const res = await  fetch(`https://api.themoviedb.org/${url}`,option);
  if(res.status === 200){
   const data = await res.json();
   return data
  }
  
}
'use client'

 
export default function Error({ error, reset }) {
  return (
    <div className="text-center text-red-500 text-3xl">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
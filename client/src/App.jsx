import { useState,useEffect } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [Details, setDetails] = useState([])

  useEffect(()=>{
    axios.get('/api/details')
    .then((response)=>{
      setDetails(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
     forntend - backend connection
     <p>length: {Details.length}</p>
     {
      Details.map((data)=>(

      data.id === 1 ?(

        <div key={data.id}>

          <p>{data.id}</p>
          <p>{data.name}</p>
          <p>{data.mail}</p>
        </div>
      ) : null
      ))
     }
    </>
  )
}

export default App

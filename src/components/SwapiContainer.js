import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-daisyui"

const SwapiContainer = () => {

  const [people, setPeople] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    getPeople()
    console.log('first')
  }, [])

// AXIOS con async await.
  const getPeople = async () => {
    const URL = 'https://swapi.dev/api/people/?page=1';
    const response = await axios.get(URL);
    console.log( response.data.results )
    setPeople( response.data.results )
  }

// AXIOS con .then()
  // const getPeople = () => {
  //   const URL = 'https://swapi.dev/api/people/?page=1';
  //   axios.get( URL ).then( res => {
  //     console.log(res.data.results)
  //     setPeople( res.data.results )
  //   } )
  // }

// FETCH con async await
  // const getPeople = async () => {
  //   const URL = 'https://swapi.dev/api/people/?page=1';
  //   const res = await fetch( URL );
  //   const data = await res.json();
  //   console.log('second');
  //   setPeople( data.results )
  // }

// FETCH con .then()
  // const getPeople = () => {
  //   const URL = 'https://swapi.dev/api/people/?page=1'
  //   fetch (URL)
  //     .then( response => response.json())
  //     .then( data => {
  //       console.log(data.results);
  //       setPeople( data.results )
  //     })

  // }

  return (
    <div>
      <h1>SwapiContainer</h1>
      { people.map( p => <li key={p.url}>{ p.name }</li>) }
    </div>
  )
}
export default SwapiContainer
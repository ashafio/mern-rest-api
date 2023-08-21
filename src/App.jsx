/* import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */








import './App.css'
import Countries from './Components/Countries/Countries'
// import Header from './Components/Header/Header'

function App() {

  return (
    <>
    {/* <Header></Header> */}
      <div className='App'>
          {/* <LoadCountries></LoadCountries> */}



          
        <Countries></Countries>


      </div>
    </>
  )
}


export default App

















/* function LoadCountries(){
  const [countries,setCountries] = useState([]);
  useEffect(()=>{

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data));

  },[]);

  return(
    <>
      <div>
        <h1>Visiting Every Country of the World.</h1>
        <h3>Available Countries: {countries.length}</h3>
      
      {
        // countries.map(country => <h6>{country.name.common}</h6>)
      countries.map(country => <Country name={country.name.common} population={country.population}></Country>)
      }
      


      </div>
    </>
  )
} */


/* 
function Country(props){

  return(
    <>
      <div>
          <h2>Name: {props.name}</h2>
          <h4>Population: {props.population}</h4>
      </div>
    </>
  )
}
 */

// export default App

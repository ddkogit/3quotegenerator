import { useEffect, useState } from 'react'

import './App.css'
import QuoteBox from "./components/QuoteBox"
import {useFetch} from './hooks/useFetch'




function App() {
  

  const [data,setData]= useState();
  const [rand,setRand]=useState(Math.floor(Math.random()*15));

  const genRand =()=>{


    const rand = Math.floor(Math.random()*15);
    
    setRand(rand);
  }
  

  


  useEffect(()=>{

   const fetchdata =async ()=>{
    const result = await useFetch();
    

    setData(result[rand]);

   }

   fetchdata();
   
  },[rand])

  return (
    <>
    <h2>Project 3 : Quote Generator</h2>
    { data &&

      <QuoteBox  text={data.text}
      author={data.author} genRand={genRand}/>
    }
    </>
  )
}

export default App

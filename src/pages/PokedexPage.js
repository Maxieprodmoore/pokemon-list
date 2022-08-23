import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { SlSpinner } from '@shoelace-style/shoelace/dist/react';
import PokedexCard from '../components/PokedexCard';
import Pagination from '../components/Pagination'

export default function PokedexPage() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageURL, setCurrentPageURL] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextPageURL, setNextPageURL] = useState()
  const [prevPageURL, setPrevPageURL] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setLoading(true)
      let cancel
      axios.get(currentPageURL, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false);
        setNextPageURL(res.data.next);
        setPrevPageURL(res.data.previous);
      setPokemon(res.data.results.map(p => p.name));
    }).catch(err => {
      console.log(err);
    })

    return () => cancel()
  }, [currentPageURL])

  function gotoPrevPage(){
    setCurrentPageURL(prevPageURL.replace("limit=4", "limit=20"))
  }

  function gotoNextPage(){
    setCurrentPageURL(nextPageURL)
  }

  if (loading) return (<div className='loading'>
    <SlSpinner></SlSpinner>
    <p>Loading...</p>
  </div>)
  
  return (
    <>
        <h2>Pokedex</h2>
        <PokedexCard pokemon={pokemon} />
        <Pagination 
          gotoPrevPage={prevPageURL ? gotoPrevPage : null}
          gotoNextPage={nextPageURL ? gotoNextPage : null}
        />
    </>
  )
}

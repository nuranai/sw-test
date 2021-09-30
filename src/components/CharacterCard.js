import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { favouriteAdded, favouriteRemove } from '../store/slices/favouriteSlice'
import heart from '../styles/heart-plain.svg'
import check from '../styles/check-mark.svg'

export default function CharacterCard({ characterInfo }) {
  //getting id of character using url
  const isInFavorites = useSelector(state => state.favourite.find(character => character.name === characterInfo.name))

  const [homeWorld, setHomeWorld] = useState('')

  const characterId = characterInfo.url.match(/(\d+)\/$/)[1]

  const imgLink = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`

  const dispatch = useDispatch();

  useEffect(() => {
    const getHomePlanet = async () => {
      const response = await fetch(characterInfo.homeworld)
      const data = await response.json()
      setHomeWorld(data.name)
    }
    getHomePlanet()
  }, [characterInfo.homeworld])

  return (
    <div className="character_card">
      <img className="character_img" src={imgLink} alt={`${characterInfo.name}`} />
      <div className="character_name">
        <h4>{characterInfo.name}</h4>
        <p>Home World: {homeWorld}</p>
        {isInFavorites
          ? <img onClick={() => { dispatch(favouriteRemove(characterInfo)) }} src={check} alt="FAVOURITE ADDED" />
          : <img onClick={() => { dispatch(favouriteAdded(characterInfo)) }} src={heart} alt="FAVOURITE" />
        }
      </div>
    </div>
  )
}
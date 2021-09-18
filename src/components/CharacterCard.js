import { useDispatch } from 'react-redux'
import { favouriteAdded } from '../store/slices/favouriteSlice'
import heart from '../styles/heart-plain.svg'

export default function CharacterCard({ characterInfo }) {
  //getting id of character using url
  const characterId = characterInfo.url.match(/(\d+)\/$/)[1]
  const imgLink = `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`
  const dispatch = useDispatch();
  return (
    <div className="character_card">
      <img className="character_img" src={imgLink} alt={`${characterInfo.name}`} />
      <div className="character_name">
        <h4>{characterInfo.name}</h4>
        <img onClick={() => { dispatch(favouriteAdded({ characterInfo })) }} src={heart} alt="FAVOURITE"/>
      </div>
    </div>
  )
}
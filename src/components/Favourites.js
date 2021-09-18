import { useSelector } from "react-redux"
import CharacterElement from "./CharacterElement"
import '../styles/favourites.scss'

export default function Favourites() {
  const favourite = useSelector(state => state.favourite)

  return (
    <div className="favourites">
    <h3>Favourite Characters:</h3>
      <ul>
        {
          favourite.map((element, index) =>
            <CharacterElement key={index} characterInfo={element} />
          )
        }
      </ul>
    </div>
  )
}
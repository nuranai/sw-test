import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { favouriteSort } from "../store/slices/favouriteSlice"
import SortCards from "./SortCards"
import CharacterCard from "./CharacterCard"
import '../styles/favourites.scss'

export default function Favourites() {

  const dispatch = useDispatch()

  const [searchValue, setSearchValue] = useState('')
  const [sortType, setSortType] = useState('url')
  const [sortDirection, setSortDirection] = useState('ascend')

  const favourite = useSelector(state => state.favourite)

  useEffect(() => {
    // console.log(favourite[0])
    // if (favourite[0])
      dispatch(favouriteSort({ sortType, sortDirection }))
  }, [favourite, sortType, sortDirection])

  return (
    <div className="favourites">
      <h3>Favourite Characters:</h3>
      <input value={searchValue} type='text' placeholder="Search by name..." onChange={(e) => setSearchValue(e.target.value)} />
      <input type="checkbox" id="sorting" onChange={(e) => setSortType(e.target.checked ? "gender" : "url")} />
      <label htmlFor="sorting">Sort Cards</label>
      {sortType === 'gender'
        ? <SortCards setSortDirection={setSortDirection} />
        : null
      }

      {/* <ul>
        {
          favourite.map((element, index) =>
            <CharacterCard key={index} characterInfo={element} />
          )
        }
      </ul> */}
      <div className="characters_block">
        <div className="characters_wrapper">
          {favourite.filter(character => character.name.match(new RegExp(searchValue, 'i'))).map((character, index) =>
            <CharacterCard key={index} characterInfo={character} />
          )}
        </div>
      </div>
    </div>
  )
}
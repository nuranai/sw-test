import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { fetchCharacters } from '../store/slices/charactersSlice'
import { searchValueChange } from '../store/slices/searchValueSlice'

export default function SearchByName() {
  const [searchValue, setSearchValue] = useState('')

  const dispatch = useDispatch()

  return (
    <div className="search">
      <input value={searchValue} type='text' placeholder="Search by name..." onChange={(e) => setSearchValue(e.target.value)} />
      <button onClick={() => {
        dispatch(searchValueChange(searchValue))
        dispatch(fetchCharacters({ searchValue, pageNumber: 1 }))
      }
      }>Search</button>
    </div>
  )
}
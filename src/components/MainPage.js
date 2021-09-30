import React, { useState, useEffect } from 'react'
import ReactPaginate from "react-paginate"
import { useSelector, useDispatch } from "react-redux"
import { fetchCharacters } from '../store/slices/charactersSlice'
import { sortCharacters } from '../store/slices/charactersSlice'
import CharacterCard from './CharacterCard'
import SearchByName from './SearchByName'
import Spinner from './Spinner'
import '../styles/main.scss'
import SortCards from './SortCards'

export default function MainPage() {

  const dispatch = useDispatch()
  const characters = useSelector(state => state.characters)
  const searchValue = useSelector(state => state.searchValue)

  const [pageCount, setPageCount] = useState(9)
  const [sortType, setSortType] = useState('url')
  const [sortDirection, setSortDirection] = useState('ascend')

  useEffect(() => {
    setPageCount(() => Math.floor(characters.count / 10) + 1)
  }, [characters.count])

  useEffect(() => {
    dispatch(fetchCharacters({ pageNumber: 1 }))
  }, [dispatch])

  useEffect(() => {
    if (characters.characters[0])
      dispatch(sortCharacters({ sortType, sortDirection }))
  }, [characters.characters, sortType, sortDirection])

  return (
    <div className="main">
      <SearchByName />
      <input type="checkbox" id="sorting" onChange={(e) => setSortType(e.target.checked ? "gender" : "url")} />
      <label htmlFor="sorting">Sort Cards</label>
      {sortType === 'gender'
        ? <SortCards setSortDirection={setSortDirection} />
        : null
      }
      <div className="characters_block">
        <div className="characters_wrapper">
          {characters.characters.map((character, index) =>
            <CharacterCard key={index} characterInfo={character} />
          )}
        </div>
        {
          characters.loading
            ? <Spinner />
            : null
        }
      </div>
      <ReactPaginate
        previousLabel='prev'
        nextLabel='next'
        pageCount={pageCount}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={({ selected }) => dispatch(fetchCharacters({ searchValue, pageNumber: selected + 1 }))}
        containerClassName={'pagination__container'}
        pageLinkClassName={'pagination__page'}
        activeLinkClassName={'pagination__active'}
        nextLinkClassName={'pagination__page pagination__button'}
        previousLinkClassName={'pagination__page pagination__button'}
        breakLinkClassName={'pagination__page'}
      />
    </div>
  )
}
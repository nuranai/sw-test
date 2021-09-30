import { useEffect } from 'react'

export default function SortCards({ setSortDirection }) {

  useEffect(() => {
    setSortDirection('ascend')
    return () => setSortDirection('ascend')
  }, [])

  return (
    <div className="sorting">
      <input
        onChange={() => setSortDirection("ascend")}
        id="ascend"
        type="radio"
        name="sort-dir"
        value="ascend"
        defaultChecked
      />
      <label htmlFor="ascend">Ascending</label>
      <input
        onChange={() => setSortDirection("descend")}
        id="descend"
        type="radio"
        name="sort-dir"
        value="descend"
      />
      <label htmlFor="descend">Descending</label>
    </div>
  )
}
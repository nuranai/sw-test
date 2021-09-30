import { useDispatch } from 'react-redux'
import { changeView } from '../store/slices/viewSlice'
import '../styles/header.scss'

export default function Header() {

  const dispatch = useDispatch()

  return (
    <header>
      <div>
        <input onChange={(e) => dispatch(changeView(e.target.value))} id="main" type="radio" name="view_type" value="main" defaultChecked />
        <label htmlFor="main">Main</label>
      </div>
      <div>
        <input onChange={(e) => dispatch(changeView(e.target.value))} id="favourite" type="radio" name="view_type" value="favourite" />
        <label htmlFor="favourite">Favourite</label>
      </div>
    </header>
  )
}
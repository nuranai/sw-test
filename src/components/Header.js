import { Link } from "react-router-dom";
import '../styles/header.scss'

export default function Header() {

  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/favourites">Favourites</Link>
    </header>
  )
}
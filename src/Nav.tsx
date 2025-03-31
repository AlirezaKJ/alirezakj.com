import { Link, Outlet } from "react-router"
import './css/nav.css'

const Nav = () => {
  return (
    <>
      <nav>
        <div className="letterbar"></div>
        <Link to="/">Home</Link>
        <Link to="/BSC">BSC</Link>
        <Link to="https://ptable.alirezakj.com/">PTable</Link>
        <Link to="https://fontexplorer.net/">FE</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav
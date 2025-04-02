import { Link, Outlet } from "react-router"
import './css/nav.css'

const Base = () => {
  return (
    <>
      <nav>
        <Link className="letterbar" to="/">
          <span id="letter">A</span>
          <div className="arrow">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M320-39 210-148l332-332-332-332 110-110 441 442L320-39Z"/></svg>
          </div>
        </Link>
        <div className="links">
          <Link to="/BSC">BSC</Link>
          <Link to="https://ptable.alirezakj.com/">PTable</Link>
          <Link to="https://fontexplorer.net/">FE</Link>
          <Link to="/Gallery">Gallery</Link>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Base
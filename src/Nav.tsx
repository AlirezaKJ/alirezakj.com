import { Link, Outlet } from "react-router"

const Nav = () => {
  return (
    <>
      <nav>
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
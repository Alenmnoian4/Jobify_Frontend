import { Link } from "react-router-dom"

function Header(props) {
  return (
    <section>
    <nav className="nav">
      <Link to="/">
        <h1>Jobify</h1>
      </Link>
    </nav>
  <a href="/posts">
  <button>All Posts</button>
  </a>
    </section>
  )
}

export default Header
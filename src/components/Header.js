import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import "../styles/Header.css"

function Header(props) {
  return (
    <section>
    <nav className="nav" align="left">
      <Link to="/" class="jobifyHeader">
        <h1>Jobify</h1>
      </Link>
    </nav>
  <div class="allPosts" align="right">
  <a href="/posts">
  <Button style={{
    backgroundColor: "#1EABFA"
  }} variant="contained" color="primary">All Posts</Button>
  </a>
  </div>
    </section>
  )
}

export default Header
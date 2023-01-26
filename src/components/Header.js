import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <section>
      <nav className="nav" align="left">
        <div class="siteName">
          <Link to="/" className="jobifyHeader">
            <h1>Jobify</h1>
          </Link>
        </div>

        <div class="links">
          <div className="createPost">
            <Link to="/posts/new">Create Post</Link>
          </div>
          <div class="allPosts">
            <Link to="/posts">
           <button>All Posts</button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;

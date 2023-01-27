import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header(props) {
  return (
    <section>
      <nav className="nav">
        <div className="siteName">
          <Link to="/" className="jobifyHeader">
            <h1>Jobify</h1>
          </Link>
        </div>

        <div className="links">
          <div className="createPost">
            <Link className="linkBtn" to="/posts/new">Create Post</Link>
          </div>
          <div className="allPosts">
            <Link className="APLink" to="/posts">
           <button className="APBtn">All Posts</button>
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Header;

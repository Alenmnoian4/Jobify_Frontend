import "../index.css";
import { Link, useLoaderData } from "react-router-dom";
import FilterRow from "../components/FilterRow";
import { useState, useRef } from "react";
import "../styles/Index.css";

function Index(props) {
  const posts = useLoaderData();

  const FilterType = useRef(null);
  const FilterOnsite = useRef(null);
  const FilterSalary = useRef(null);

  // List of original types to display start with full list
  const [types, setTypes] = useState(posts);

  function newFilterFunction() {
    let result = posts;
    if (FilterType.current.value !== "All") {
      result = result.filter((post) => post.type === FilterType.current.value);
    }
    if (FilterOnsite.current.value !== "All") {
      result = result.filter(
        (post) => post.onsite === FilterOnsite.current.value
      );
    }
    if (FilterSalary.current.value !== "All") {
      result = result.filter(
        (post) => post.salary === FilterSalary.current.value
      );
    }
    setTypes(result);
  }

  return (
    <div className="allPosts">
      <h2 className="allPostsh2">All Posts</h2>
      <div className="selectMenus">
        <h3 className="displayNone filterh3">Filters: </h3>
        <FilterRow 
          refs={{ FilterType, FilterOnsite, FilterSalary }}
          newFilterFunction={newFilterFunction}
        />
      </div>
      <div className="index">
        {types.map((post) => (
          <Link to={`/posts/${post._id}`} className="link">
            <div className="postCard">
              <div className="column role">{post.role}</div>
              <div className="column displayNone">{post.type}</div>
              <div className="column displayNone">{post.location}</div>
              <div className="column columnMore">
                Learn More
                <img
                  className="arrow"
                  src="https://i.imgur.com/iYbtvev.png"
                  alt="arrow"
                ></img>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;

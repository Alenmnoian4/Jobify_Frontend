import "../index.css";
import { Link, useLoaderData } from "react-router-dom";
import FilterRow from "../components/FilterRow";
import { useState, useRef } from "react";

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
    <div>
      <h2>Jobify Posts</h2>
      <FilterRow
        refs={{ FilterType, FilterOnsite, FilterSalary }}
        newFilterFunction={newFilterFunction}
      />
      <div className="index">
        {types.map((post) => (
          <Link to={`/posts/${post._id}`} className="post">
            <div className="post">
              <h2>{post.role}</h2>
              <h2>{post.type}</h2>
              <h2>{post.location}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Index;

import "../index.css";
import {Link, useLoaderData } from "react-router-dom"
import FilterRow from "../components/FilterRow";
import { useState, useRef } from "react";

function Index(props) {
    const posts = useLoaderData()

const FilterType = useRef(null)
const FilterOnsite = useRef(null)

// List of original types to display start with full list
const [types, setTypes] = useState(posts)

function newFilterFunction(){
  let result = posts
  if(FilterType.current.value !== "All"){
    result = result.filter(
      (post) => post.type === FilterType.current.value
    );
  }
  if(FilterOnsite.current.value !== "All"){
    result = result.filter(
      (post) => post.onsite === FilterOnsite.current.value
    );
  }
  setTypes(result)
}

// // function to filter based on filterValue unless all (then sets to posts)
// function onTypeFilterValueSelected(filterValue) {
//   if(filterValue !== "All"){
//     const filteredTypes = posts.filter(
//       (post) => post.type === filterValue
//     );
//     setTypes(filteredTypes)
//   } else {
//   setTypes(posts)
// }
// }  

// // List of original onsites to display start with full list
// const [onsite, setOnsite] = useState(types)

// // function to filter based on filterValue unless all (then sets to types)
// function onOnsiteFilterValueSelected(filterValue) {
//   if(filterValue !== "All"){
//     const filteredOnsite = types.filter(
//       (post) => post.onsite === filterValue
//     );
//     setOnsite(filteredOnsite)
//   } else {
//   setOnsite(types)
// }
// }  


    return (
        <div>
                <h2>Jobify Posts</h2>
                <FilterRow refs={{FilterType, FilterOnsite}} newFilterFunction={newFilterFunction}/>
            <div className="index">
            {types.map(post => (
              <Link to={`/posts/${post._id}`} className="post"><div className="post">
                    
                        <h2>{post.role}</h2>
                        <h2>{post.type}</h2>
                        <h2>{post.location}</h2>
                          
                </div></Link>
            ))}
            </div>
        </div>
    )
}

export default Index
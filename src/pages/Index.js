import "../index.css";
import {Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const posts = useLoaderData()

    return (
        <div>
                <h2>Jobify Posts</h2>
            <div className="index">
            {posts.map(post => (
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
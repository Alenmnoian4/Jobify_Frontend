import { useLoaderData, Link } from "react-router-dom"
import "../styles/Home.css"

export default function Home (props) {
const posts = useLoaderData()

    return (
        <section className="homePage">
            <section class="homeBody">
                <section className="homeText">
                    <h2>A Place For All Your <br/>Job Posts</h2>
                    <p>Jobify allows job seekers to easily store and manage their job applications. Take control of your career now! </p>
                </section>
                <section className="homeGraphic">
                    <img src="https://i.imgur.com/SQkvSRO.png" alt="something" />
                </section>
            </section>
            <section className="additionsSect">
                <h3>Recent Additions</h3>
                <section className="jobCards">
                    {posts.slice(-4).map((post) => (
                         <Link to={`/posts/${post._id}`}>
                         <div className="jobCard">
                        <h4>{post.role}</h4>
                        <p>{post.type}</p>
                        <p>{post.location}</p>
                    </div>
                    </Link>
                    ))}
                   
                </section>
            </section>
        </section>
    )
}
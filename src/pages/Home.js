import { useLoaderData } from "react-router-dom"
import "../styles/Home.css"

export default function Home (props) {
const posts = useLoaderData()

    return (
        <section className="homePage">
            <section class="homeBody">
                <section className="homeText">
                    <h2>A Place For All Your <br/>Job Posts</h2>
                    <p>We provide a central location for all job posts. Input the job's details and let us hold onto it for you. </p>
                </section>
                <section className="homeGraphic">
                    <img src="https://i.imgur.com/SQkvSRO.png" alt="something" />
                </section>
            </section>
            <section className="additionsSect">
                <h3>Recent Additions</h3>
                <section className="jobCards">
                    {posts.slice(-4).map((post) => (
                         <div className="jobCard">
                        <h4>{post.role}</h4>
                        <p>{post.type}</p>
                        <p>{post.location}</p>
                    </div>
                    ))}
                   
                </section>
            </section>
        </section>
    )
}
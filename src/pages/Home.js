import { useLoaderData } from "react-router-dom"

export default function Home (props) {
const posts = useLoaderData()

    return (
        <section>
            <section className="homeText">
                <h2>A Place For All Your Job Posts</h2>
                <p>We provide a central location for all job posts. Input the job's details and let us hold onto it for you. </p>
            </section>
            <section className="homeGraphic">
                <img src="#" alt="something" />
            </section>
            <section className="additionsSect">
                <h3>Recent Additions</h3>
                <section className="jobCards">
                    {posts.map((post) => (
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
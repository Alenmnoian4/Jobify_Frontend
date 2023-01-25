import { useLoaderData, Form } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import "../index.css";
import { useState } from "react";
import { Form, Link, useLoaderData } from "react-router-dom"

function Index(props) {
    const posts = useLoaderData()

    return (
        <div>
                <h2>Jobify Posts</h2>
            <div className="index">
            {posts.map(post => (
                <div className="post">
                    <Link to={`/${post._id}`} className="post"></Link>
                        <h2>{post.role}</h2>
                        <h2>{post.details}</h2>
                        <h2>{post.location}</h2>
                        <h2>{post.onsite}</h2>
                        <h2>{post.appURL}</h2>
                        <h2>{post.location}</h2>
                        <h2>{post.salary}</h2>
                </div>
            ))}
            </div>
        </div>
    )
}

export default Index
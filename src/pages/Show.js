import { useLoaderData, Form } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Update from "../components/Update";
import { useState } from "react";
import "../styles/Show.css"

function Show(props) {
  const eachjob = useLoaderData();

  const [showForm, setShowForm] = useState(false);


  return (
    <div>
        <div className="filters">

        </div>

      <div className="jobInformation">
        <h2>{eachjob.role}</h2>
        <p>{eachjob.type}</p>
        <p>{eachjob.location}</p>
        <p>{eachjob.onsite}</p>
        <p>{eachjob.salary}</p>
        <p>{eachjob.details}</p>
        <ExternalLink href={eachjob.appURL} target="_blank">
          <button>Application</button>
        </ExternalLink>
      </div>

      <button
        className="EditButton"
        onClick={() => setShowForm(!showForm)}
      >Edit Job Info</button>

      <Form action={`/posts/delete/${eachjob._id}`} method="post">
        <input type="submit" value={`Delete Post`} />
      </Form>

    {showForm ? (<Update/>) : null}

    </div>
  );
}

export default Show;

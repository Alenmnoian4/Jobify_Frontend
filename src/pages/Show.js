import { useLoaderData, Form } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import Update from "../components/Update";
import { useState } from "react";
import "../styles/Show.css"

function Show(props) {
  const eachjob = useLoaderData();

  const [showForm, setShowForm] = useState(false);


  return (
    <div className="showBody">


      <div className="showMain">
        <div className="jobInformation">
          <h2>{eachjob.role}</h2>
          <p><span>Job Type:</span> {eachjob.type}</p>
          <p><span>Location:</span> {eachjob.location}</p>
          <p><span>On-site/Remote:</span> {eachjob.onsite}</p>
          <p><span>Salary:</span> {eachjob.salary}</p>
          <p><span>Details:</span> {eachjob.details}</p>
          <div className="showButtons">
            <ExternalLink href={eachjob.appURL} target="_blank">
              <button className="appBtn">Application</button>
            </ExternalLink>
                    
                    <div className="editDiv">
                      <button
                                  className="EditButton"
                                  onClick={() => setShowForm(!showForm)}
                      >Edit Job Info</button>
                    </div>
                    <Form action={`/posts/delete/${eachjob._id}`} method="post">
            <input className="deleteBtn" type="submit" value={`Delete Post`} />
                    </Form>
          </div>
        </div>
        <div className="showImg">
        <img src="https://i.imgur.com/PlfdbgJ.png" alt="Jobify"></img>
        </div>
      </div>
    <div className="updateCard">
      {showForm ? (<Update/>) : null}
      </div>


    </div>
  );
}

export default Show;

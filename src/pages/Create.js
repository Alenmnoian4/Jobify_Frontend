import { Form } from "react-router-dom";
import "../styles/Create.css";

function Create() {
  return (
    <div className="all">
      <h2>Job Information:</h2>

  
     <div className="FormGraphics">
       <Form className="createForm" action="/posts/create" method="post">
       
       <div className="textFields">
         <div className="alldiv">
              <h3 for="role">Role:</h3>
              <input
                type="text" className="input"
                name="role"
                placeholder="Job Role"
                id=""
              />
         </div>
         <div className="alldiv">
              <h3 for="details">Details:</h3>
              <textarea className="details"
                name="details"
                id=""
                cols="30"
                rows="10"
              ></textarea>
         </div>
         <div className="alldiv">
              <h3 for="Location">Location:</h3>
              <input className="input"
                type="text"
                name="location"
                placeholder="Location"
                id=""
              />
         </div>
         <div className="alldiv">
              <h3 for="appURL">Application URL:</h3>
              <input className="input"
                type="text"
                name="appURL"
                placeholder="Application URL"
                id=""
              />
         </div>
       </div>
       <div className="dropDowns">
         <div className="alldiv">
              <h3 for="On-site">On-site/Remote:</h3>
              <select name="onsite" id="">
                <option value="On-site">On-site</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Remote">Remote</option>
              </select>
         </div>
         <div className="alldiv">
              <h3 for="type">Type:</h3>
              <select name="type" className="typebd"id="">
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Volunteer">Volunteer</option>
                <option value="Internship">Internship</option>
                <option value="Apprenticeship">Apprenticeship</option>
                <option value="Other">Other</option>
              </select>
         </div>
         <div className="alldiv">
              <h3 for="salary">Salary:</h3>
              <select name="salary" className="salarybd"id="">
                <option value="-$50,000">Under $50,000</option>
                <option value="$50,000 - $70,000">$50,000 - $70,000</option>
                <option value="$70,000 - $90,000">$70,000 - $90,000</option>
                <option value="$90,000 - $110,000">$90,000 - $110,000</option>
                <option value="$110,000 - $130,000">$110,000 - $130,000</option>
                <option value="$130,000 - $150,000">$130,000 - $150,000</option>
                <option value="$150,000 - $170,000">$150,000 - $170,000</option>
                <option value="$170,000 - $200,000">$170,000 - $200,000</option>
                <option value="$200,000+">$200,000+</option>
              </select>
         </div>
       </div>
       <div className="btn">
            <input className="submit"type="Submit" />
       </div>
            
          </Form>
  
    <div className="graphic">
      <img id="blob" src="https://i.imgur.com/7NUHkHI.png" alt="blob"/>
    </div>
  
   </div>
    </div>
  );
}
export default Create;

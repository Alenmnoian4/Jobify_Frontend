import { Form } from "react-router-dom";
import "../styles/Create.css";

function Create() {
  return (
    <div className="all">
      <h2>Job Information:</h2>
      <Form className="createForm" action="/posts/create" method="post">
        <label for="role">Role:</label>
        <input
          type="text"
          name="role"
          placeholder="Job Role"
          id=""
        />

        <label for="details">Details:</label>
        <textarea
          name="details"
          id=""
          cols="30"
          rows="10"
        ></textarea>
    
        <label for="Location">Location:</label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          id=""
        />
       
        <label for="On-site">On-site/Remote:</label>
        <select name="onsite" id="">
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
        </select>

        <label for="appURL">Application URL:</label>
        <input
          type="text"
          name="appURL"
          placeholder="Application URL"
          id=""
        />
       
        <label for="type">Type:</label>
        <select name="type" id="">
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Temporary">Temporary</option>
          <option value="Volunteer">Volunteer</option>
          <option value="Internship">Internship</option>
          <option value="Apprenticeship">Apprenticeship</option>
          <option value="Other">Other</option>
        </select>
      
        <label for="salary">Salary:</label>
        <select name="salary" id="">
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
      
        <input type="Submit" />
      </Form>
    </div>
  );
}
export default Create;

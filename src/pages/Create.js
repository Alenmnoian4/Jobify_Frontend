import './index.css';

function Create (){
  return (
    <div className="all">
      <h2>Job Information:</h2>
<form className="createForm" action="/create" method="post">
<label for="role">Role:</label>
  <input type="text" name="role" placeholder="Enter Job Role Here" id=""/><br> </br>
  <label for="details">Details:</label> <br> </br>
   <textarea name="details" id="" cols="30" rows="10"></textarea> <br> </br><br> </br>
    
   <label for="Location">Location:</label>
  <input type="text" name="location" placeholder="Enter Location Here" id=""/><br> </br>
  
  <label for="On-site">On-site/Remote:</label><br> </br>
  <select name="onsite" id="">
    <option value="On-site">On-site</option>
      <option value="Remote">Remote</option> 
      <option value="Hybrid">Hybrid</option>
      </select>
    <br> </br>
    <label for="appURL">Job url:</label>
  <input type="url" name="appURL" placeholder="Enter Job url Here" id=""/><br> </br>
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
    </select>  <br> </br>  <br> </br>
    <label for="salary">Salary:</label><br> </br>
  <select name="salary" id="">
    <option value="85k">50k-100k</option>
      <option value="120k">100k-150k</option>
      <option value="180k">150k-200k</option>
   </select>
     <br> </br>
     <br> </br>
     <br> </br>
     <input type="Submit"/>
      </form>
      </div>
      )}
      export default Create;
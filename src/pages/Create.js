
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from 'react-router-dom'
import router from './router';
import reportWebVitals from './reportWebVitals';
function Create(){


const [showForm, setShowForm] = useState(false);
return (
    <div className="all">
      <h2>Job Information:</h2>
<form className="createForm" action="/create" method="post">
<label for="role">Role:</label>
    <input type="text" name="role" placeholder="Enter Job Role Here" id=""/><br> <br>
    <label for="role">Location:</label>
    <input type="text" name="location" placeholder="Enter Location Here" id=""/><br> <br>
    <label for="role">Type:</label>
    <select name="language" id="language">
      <option value="job 1">Job 1</option>
      <option value="job2">Job 2</option>
      <option value="job3">Job 3</option>
      <option value="job 4">Job 4</option>
    </select>  </br> </br>  </br> </br>
    <label for="role">Onsite/Remote:</label><br> </br>
    <select name="type" id="language">
      <option value="onsite">Onsite</option>
      <option value="remote">Remote</option> </select>
      <br> </br>
      <label for="role">Salary:</label><br> </br>
    <select name="type" id="language">
      <option value="remote">50k-100k</option>
      <option value="onsite">100k-150k</option>
      <option value="remote">150k-200k</option>
     </select>
     <br> </br>
     <br> </br>
     <br> </br>
     <label for="details">Details:</label> <br> </br>
     <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
      </div>
      )
      }
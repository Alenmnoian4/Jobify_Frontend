import "../styles/Index.css";

export default function TypeFilter(props) {
    
  
  return (
    <div className="selectColumn">
      <h4 className="dropdownh4">Job Type:</h4>
      <select 
      className="allpostsselect" name="type" ref={props.theRef} onChange={props.newFilterFunction}>
        <option value="All">All</option>
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
  );
}

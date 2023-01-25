export default function TypeFilter(props) {
    
    function onTypeFilterValueChanged(event) {
        props.TypeFilterValueSelected(event.target.value)
    }
  
  return (
    <div>
      <select name="type" onChange={onTypeFilterValueChanged}>
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

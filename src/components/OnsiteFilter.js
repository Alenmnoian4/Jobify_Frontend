export default function OnsiteFilter(props) {
    
    function onOnsiteFilterValueChanged(event) {
        props.OnsiteFilterValueSelected(event.target.value)
    }
  
  return (
    <div>
      <select name="onsite" ref={props.theRef} onChange={props.newFilterFunction}>
          <option value="All">All</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
        </select>
    </div>
  );
}

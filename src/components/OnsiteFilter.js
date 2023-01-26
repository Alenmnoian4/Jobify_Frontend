import "../index.css";

export default function OnsiteFilter(props) {
    
  
  return (
    <div class="selectColumn">
      <select name="onsite" ref={props.theRef} onChange={props.newFilterFunction}>
          <option value="0">On-site/Remote</option>
          <option value="All">All</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
        </select>
    </div>
  );
}

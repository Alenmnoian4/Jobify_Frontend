import "../styles/Index.css";

export default function OnsiteFilter(props) {
    
  
  return (

    <div className="selectColumn">
      <h4 className="dropdownh4">On-site/Remote:</h4>
      <select className="allpostsselect" name="onsite" ref={props.theRef} onChange={props.newFilterFunction}>
          <option value="All">All</option>
          <option value="On-site">On-site</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Remote">Remote</option>
        </select>
    </div>
  );
}

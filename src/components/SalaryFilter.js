import "../styles/Index.css";

export default function SalaryFilter(props) {
  return (
    <div className="selectColumn">
      <h4 className="dropdownh4">Job Salary:</h4>
      <select
        className="allpostsselect"
        name="salary"
        id=""
        ref={props.theRef}
        onChange={props.newFilterFunction}
      >
        <option value="All">All</option>
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
  );
}

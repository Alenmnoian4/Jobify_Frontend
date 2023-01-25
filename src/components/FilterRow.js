import TypeFilter from "./TypeFilter";
import OnsiteFilter from "./OnsiteFilter";
import SalaryFilter from "./SalaryFilter";

export default function FilterRow(props) {
  return (
    <div>
      <TypeFilter
        theRef={props.refs.FilterType}
        newFilterFunction={props.newFilterFunction}
      />
      <OnsiteFilter
        theRef={props.refs.FilterOnsite}
        newFilterFunction={props.newFilterFunction}
      />
      <SalaryFilter
        theRef={props.refs.FilterSalary}
        newFilterFunction={props.newFilterFunction}
      />
    </div>
  );
}

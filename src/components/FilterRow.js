import TypeFilter from "./TypeFilter"
import OnsiteFilter from "./OnsiteFilter"

export default function FilterRow (props){
return(

<div>
    <TypeFilter theRef={props.refs.FilterType} newFilterFunction={props.newFilterFunction}/>
    <OnsiteFilter theRef={props.refs.FilterOnsite} newFilterFunction={props.newFilterFunction}/>
</div>
)


}
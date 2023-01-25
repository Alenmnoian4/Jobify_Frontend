import TypeFilter from "./TypeFilter"
import OnsiteFilter from "./OnsiteFilter"

export default function FilterRow (props){
return(

<div>
    <TypeFilter TypeFilterValueSelected={props.typeFilterValueSelected}/>
    <OnsiteFilter OnsiteFilterValueSelected={props.onsiteFilterValueSelected}/>
</div>
)


}
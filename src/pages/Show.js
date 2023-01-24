import { useLoaderData, Form } from "react-router-dom";


function Show(props){  
    const eachjob = useLoaderData();

    return(
        <div classrole="eachjob">
            <h1>{eachjob.role}</h1>
            <h2>{eachjob.onsite}</h2>
            <img src={eachjob.details} alt={eachjob.role}/>


            <h2>Update {eachjob.role}</h2>
            <Form action={`/post/${eachjob._id}`} method="post">
                <select name="" id=""></select>
                <input defaultValue={eachjob.role} type="input" role="role" placeholder="jobeachjob role"/>
                <input defaultValue={eachjob.details} type="input" role="details" placeholder="jobeachjob details"/>
                <input defaultValue={eachjob.location} type="input" role="location" placeholder="jobeachjob location"/>
                <select name="onsite" defaultvalue={eachjob.onsite}>
                    <option value="onsite">Onsite </option>
                    <option value="remote">Remote </option>
                    </select>
                <input defaultValue={eachjob.appURL} type="input" role="appURL" placeholder="jobeachjob appURL"/>
                <select name="type" defaultvalue={eachjob.type}>
                    <option value="job 1">Job 1</option>
                <option value="job 2">Job 2</option>
                <option value="job 3">Job 3</option>
                <option value="job 4">Job 4</option>
                </select>
                <select name="salary" defaultvalue={eachjob.salary}>
                    <option value="85k">50k-100k</option>
                    <option value="120k">100k-150k</option>
                    <option value="180k">150k-200k</option>
                    </select>
                
        <input type="submit" value={`update ${eachjob.role}`}/>
                <h2>Delete eachjob</h2>
            </Form>
            <Form action={`/delete/${eachjob._id}`} method="post">

                <input type="submit" value={`delete ${eachjob.role}`}/>

            </Form>

        </div>
    )
}

export default Show;
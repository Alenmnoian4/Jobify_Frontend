const URL='http://localhost:3000';


export const jobLoader = async () => {
    const response = await fetch(URL + "/job");
    const job = await response.json();
    return job;
}

export const eachjobLoader = async ({params}) => {
    const response = await fetch(URL + "/job/" + params.id);
    const eachjob = await response.json();
    return eachjob;
}
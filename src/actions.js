import { redirect } from "react-router-dom"

const URL = "https://jobifybackendapp.onrender.com"

export const createAction = async ({ request }) => {

  const formData = await request.formData()

  const newPost = {
    role: formData.get("role"),
    details: formData.get("details"),
    location: formData.get("location"),
    onsite: formData.get("onsite"),
    appURL: formData.get("appURL"),
    type: formData.get("type"),
    salary: formData.get("salary")
  }

  await fetch(URL + "/posts", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  })

  return redirect("/")
}

export const updateAction = async ({request, params}) => {

    const formData = await request.formData()

    const updatedPost = {
        role: formData.get("role"),
        details: formData.get("details"),
        location: formData.get("location"),
        onsite: formData.get("onsite"),
        appURL: formData.get("appURL"),
        type: formData.get("type"),
        salary: formData.get("salary")
    }

    await fetch(URL + "/posts/" + params.id, {
        method: "put",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(updatedPost)
    })

    return redirect("/")
}

export const deleteAction = async ({params}) => {

    await fetch(URL + "/posts/" + params.id, {
        method: "delete"
    })

    return redirect("/")
}
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";


  
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route path="" element={<Home/>} loader={indexLoader}/>
        <Route path="posts" element={<Index/>} loader={indexLoader}/>
        <Route path="posts/new" element={<Create/>}/>
        <Route path="posts/:id" element={<Show/>} loader={showLoader}/>
        {/* Action Routes */}
        <Route path="posts/create" action={createAction}/>
        <Route path="posts/update/:id" action={updateAction}/>
        <Route path="posts/delete/:id" action={deleteAction}/>
      </Route>
    )
  );
  
  export default router
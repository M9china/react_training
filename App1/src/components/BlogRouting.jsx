import { MyComponent,BlogComponent,OneBlogComponent,NavigationComponent, DataCollector } from ".";
import { Route, Routes } from "react-router-dom"
export const BlogRouting = () => {
    const data = {
        title: " My Blog",
        description: "My Blog Post",
    }
    return(
        <>
        <NavigationComponent/>
        <Routes>
         <Route path="/" element={<MyComponent title={data.title}/>} />
         <Route path="/blogs" element={<BlogComponent/>} >
         <Route path=":id" element={<OneBlogComponent/>}/>
         <Route path="account" element={<DataCollector/>} />
         </Route>
        </Routes>
       </>
    )
};



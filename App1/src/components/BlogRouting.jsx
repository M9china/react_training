import { MyComponent,BlogComponent,OneBlogComponent,NavigationComponent, DataCollector, FooterComponent, AddBlogPost } from ".";
import { Route, Routes } from "react-router-dom"
export const BlogRouting = () => {

    return(
        <>
        <NavigationComponent/>
        <Routes>
         <Route path="/" element={<MyComponent />} />
         <Route path="/blogs" element={<BlogComponent/>} >
         <Route path=":id" element={<OneBlogComponent/>}/>
         </Route>
         <Route path="/account" element={<DataCollector/>} />
         <Route path="/addBlog" element={<AddBlogPost/>} />
        </Routes>
        <FooterComponent/>

       </>
    )
};



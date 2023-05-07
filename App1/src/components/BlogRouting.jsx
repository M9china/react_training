import { MyComponent,BlogComponent,OneBlogComponent,NavigationComponent, DataCollector } from ".";
import { Route, Routes } from "react-router-dom"
export const BlogRouting = () => {

    return(
        <>
        <NavigationComponent/>
        <Routes>
         <Route path="/" element={<MyComponent />} />
         <Route path="/blogs" element={<BlogComponent/>} />
         <Route path="/blogs/:id" element={<OneBlogComponent/>}/>
         <Route path="/account" element={<DataCollector/>} />
        </Routes>
        <footer className="footer">
          <a className="mediaPlatforms" href="https://github.com/M9china">GitHub</a>
          <a className="mediaPlatforms" href="https://twitter.com/Nqobile60227239">Twitter</a>
          <a className="mediaPlatforms" href="https://facebook.com">Facebook</a>
      </footer>

       </>
    )
};



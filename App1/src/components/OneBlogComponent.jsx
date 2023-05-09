import { useParams } from "react-router-dom";
import { blogPosts} from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id));
  return (
    <div className="myCompCont">
    <div className="cover">
        <div>
          <img src={blogPost.image} alt="Blog post cover" />
          <h1>{blogPost.title}</h1>
          <p>{blogPost.description}</p>
          {
            blogPost.body.map(detailedDesc=> {
              return <p>{detailedDesc}</p>
            })
          }
        </div>
       
    </div>
    </div>
  );
};


/*import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id } = useParams();
  //
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id));
  return (
    <>
    <div className="cover">
    <h1>{blogPost.title}</h1>
      <p>{blogPost.description}</p>
      <img src={blogPost.image} alt={blogPost.title} />
      <p>{blogPost.date}</p>
    </div>

    </>
  );
};*/


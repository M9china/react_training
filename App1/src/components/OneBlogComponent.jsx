import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id));
  return (
    < >
      <div >
        <div>
          <h1 className="text-2xl">{blogPost.title}</h1>
          <img className='w-21 h-20 object-cover rounded-lg' src={blogPost.image} alt="Blog post cover" />
          {
            blogPost.body.map(detailedDesc => {
              return <p className="border-l-2 border-r-2 border-t-2 border-b-2 ml-10 border-gray-300 h-64 pl-4 flex flex-col justify-between" key={blogPost.id}>{detailedDesc}</p>
            })
          }
        </div>

      </div>
    </>
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


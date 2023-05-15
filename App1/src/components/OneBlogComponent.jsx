import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogComponent";

export const OneBlogComponent = () => {
  const { id } = useParams();
  const blogPost = blogPosts.find((blog) => blog.id === parseInt(id));
  return (
    < >
      <h1 className="text-xl mx-auto mb-10 mt-10 ml-10 font-bold">{blogPost.title}</h1>

      <div className="flex flex-col center mb-20 ml-10" >
        <div className="flex">
          <img className='h-64 w-64 object-cover rounded-md' src={blogPost.image} alt="Blog post cover" />
          {
            blogPost.body.map(detailedDesc => {

              return <p className=" pr-3 mr-10 w-full md:my-1 justify-center border-l-2 border-r-2 border-t-2 border-b-2 ml-10 border-gray-300 pl-4 flex flex-col overflow-hidden" key={blogPost.id}>{detailedDesc}</p>
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


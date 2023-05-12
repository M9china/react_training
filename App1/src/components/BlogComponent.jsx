import { Link, Outlet, useParams } from "react-router-dom";
export const blogPosts = [
  {
    id: 1,
    title: "Getting Started in Software Engineering",
    description:
      "In this post, we discuss the skills and qualifications needed to pursue a career in software engineering.",
    date: "2023-05-05",
    image: "https://i.pinimg.com/564x/90/c1/ca/90c1ca3f7cd58fb3e04422542b40a2a4.jpg",
    body: [
      , `Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
    ]
  },
  {
    id: 2,
    body: [
      , `A software engineer's day is dynamic, involving planning and communication, coding and testing, collaboration, learning and growth, breaks and self-care, as well as documentation and maintenance. It is a constantly evolving field with opportunities for creativity and innovation, and demands strong collaboration, problem-solving and technical skills. Pursuing a career in software engineering can be rewarding and exciting for those passionate about the field.`
    ],
    title: "The Day-to-Day Life of a Software Engineer",
    description:
      "In this post, we describe a typical day in the life of a software engineer and discuss the various tasks and responsibilities involved.",
    date: "2023-05-05",
    image: "https://i.pinimg.com/564x/8f/23/c5/8f23c5fc86be8bf1fe71751221012eed.jpg",
  },
  {
    id: 3,
    body: [
      , `Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility. Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
    ],
    title: "Challenges and Opportunities in Software Engineering",
    description:
      "In this post, we explore the various challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt.",
    date: "2023-05-05",
    image: "https://i.pinimg.com/564x/0f/61/11/0f611111edf1d3451a2f5f3e75849d09.jpg",
  },
  {
    id: 4,
    body: [
      , `
      To advance your career in software engineering, it's essential to continuously improve your skills, specialize in a niche, network with others in the industry, seek feedback, take on new challenges, consider further education, and develop soft skills such as communication and leadership. By being proactive and strategic in your career development, you can achieve your goals and make meaningful contributions to the field.`
    ],
    title: "Advancing Your Career in Software Engineering",
    description:
      "In this post, we offer tips and advice on how to advance your career as a software engineer, including the importance of networking, building a strong online presence, and continuously improving your skills and knowledge.",
    date: "2023-05-05",
    image: "https://i.pinimg.com/564x/dc/b9/cf/dcb9cf08a403633862c722660d03bfef.jpg",
  },
  {
    id: 5,
    body: [
      , `Maintaining a healthy work-life balance is essential for avoiding burnout and achieving long-term success in the demanding field of software engineering. Prioritizing tasks, setting realistic goals, learning to say no, disconnecting after work, focusing on health, getting organized, and seeking support are all important tips for achieving balance. By taking a proactive approach and implementing these strategies, software engineers can thrive both personally and professionally.`
    ],
    title: "Balancing Work and Life as a Software Engineer",
    description:
      "In this post, we explore the challenges of maintaining a healthy work-life balance in the demanding field of software engineering and discuss strategies for managing stress and making time for self-care and hobbies.",
    date: "2023-05-05",
    image: "https://i.pinimg.com/564x/9a/df/69/9adf69928709f2ca1f5c211b113759ab.jpg",
  },
];

export const DisplayBlog = ({ id, title, description, date, image }) => {
  return (

    <div className="flex flex-col mb-10">
      <Link to={`/blogs/${id}`} className="flex">
        <h1 className="text-xl flex flex-row-center">{title}</h1>
        <img className="h-64 w-64 object-cover rounded-md" src={image} alt={title} />
        <div className="border-l-2 border-r-2 border-t-2 border-b-2 ml-10 border-gray-300 h-64 pl-4 flex flex-col justify-between w-34">
          <p className="bg-gray-800 text-white px-2 py-1 text-sm self-end">{date}</p>
          <div className="h-full flex-grow flex flex-col justify-between">
            <div className="mt-2"> 
              <p className="h-full md:my-10">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>

  );
};

export const BlogComponent = () => {
  const { id } = useParams();
  return (
    <div>
      {!id ? (
        <>
          <div className="ml-4">
            {blogPosts.map((blog) => (
              <div key={blog.id} className=" mt-5 mb-5 w-30 h-84 mr-4">
                {DisplayBlog({ ...blog, key: blog.id })}
              </div>
            ))}
          </div>
        </>
      ) : (
        <Outlet />
      )}
    </div>
  );
};


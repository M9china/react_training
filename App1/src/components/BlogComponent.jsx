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
      "This blog post explores the challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt."
      ,`Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
    ]
  },
  {
    id: 2,
    body: [
      "This blog post explores the challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt."
      ,`Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
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
      "This blog post explores the challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt."
      ,`Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
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
      "This blog post explores the challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt."
      ,`Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
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
      "This blog post explores the challenges and opportunities that software engineers face in their careers, including the rapid pace of technological change and the need to continuously learn and adapt."
      ,`Software engineering presents challenges like keeping up with technology, meeting deadlines, effective communication, and debugging, but also provides opportunities like innovation, collaboration, career advancement, and flexibility.
      Software engineers need to stay updated, manage their time, communicate effectively, and troubleshoot efficiently. The field offers endless opportunities to create new and exciting software solutions, work with other professionals, advance in one's career, and have flexibility in work arrangements.`
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
    <div className="myCompCont">
          <Link to={`/blogs/${id}`} className="cover">
      <h1>{title}</h1>
      <p >{description}</p>
      <img src={image} alt={title} />
      <p >{date}</p>
    </Link>
    </div>

  );
};

export const BlogComponent = () => {
  const { id } = useParams();
  return (
    <div className="blog-container">
      {!id ? (
        <>
          <div className="blog-posts">
            {blogPosts.map((blog) => (
              <div key={blog.id}>
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


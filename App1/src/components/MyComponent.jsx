const aboutMe = {
  title: 'About me',
  description: `In my latest blog post, I talk about my journey as a computer systems engineer, and how I discovered my passion for backend development.
  I enjoy tackling the complexity of backend development, using my skills in algorithms, data structures, and system design to create efficient and scalable solutions.
  Throughout my career, I've worked with a variety of programming languages and technologies, and one of my most memorable projects was building a complex e-commerce platform. 
  I'm excited to continue my journey in this field, learning new technologies and approaches to software development while building robust systems`
}
export const MyComponent = () => {
  return (
    <>
      <div>
      <p className="text-xl text-gray">{aboutMe.description}</p>
    </div>
    </>
 
  );
};
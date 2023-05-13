import { useState } from "react"
export const AddBlogComponent = () => {
    const [postData, setPostData] = useState({
      title: "",
      description: "",
      body: []
    })
  
    const formatText = (text)=>{
      return text.split("\n")
    }
  const handlChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    // console.log(name, value);
    setPostData({
      ...postData,
        [name]: name==="body"? formatText(value): value
      })
  }
  const postBlog = (event) => {
    event.preventDefault();
    console.log(postData);
  }
    return <>
    <form className="flex flex-col space-y-4 p-6 " onChange={handlChange} onSubmit={postBlog}>
      <div className="flex flex-col">
        <label htmlFor="title" className="mb-2 font-bold text-gray-700">
          Blog title
        </label>
        <input type="text" id="title" name='title' placeholder='Title' className="px-4 py-2 border border-gray-400 rounded-md w-1/2" />
      </div>
  
      <div className="flex flex-col">
        <label htmlFor="description" className="mb-2 font-bold text-gray-700">
          Blog description
        </label>
        <textarea id="description" name='description' placeholder='Descripton' className="px-4 py-2 border border-gray-400 rounded-md w-1/2" />
      </div>
  
      <div className="flex flex-col">
        <label htmlFor="body" className="mb-2 font-bold text-gray-700">
          Blog Body
        </label>
        <textarea id="body" name='body' placeholder='Blog post body, separated by commas' className="px-4 py-2 border border-gray-400 rounded-md w-1/2" />
      </div>
  
      <button type="submit" className="bg-slate-700 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-1/12">
        Post blog
      </button>
    </form >
  </>
  
  }
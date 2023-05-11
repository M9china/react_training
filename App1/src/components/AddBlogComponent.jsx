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
      < form onChange={handlChange} onSubmit={postBlog}>
        <div>
          <label htmlFor="title">
            Blog title
          </label>
          <input type="text" id="title" name='title' placeholder='Title' />
  
        </div>
  
        <div>
          <label htmlFor="description">
            Blog description
          </label>
          <textarea id="description" name='description' placeholder='Descripton' />
  
        </div>
  
        <div>
          <label htmlFor="body">
            Blog Body
          </label>
          <textarea id="body" name='body' placeholder='Blog post body, separated by commas' />
  
        </div>
        <input type="submit" value="post blog " />
      </form >
    </>
  }
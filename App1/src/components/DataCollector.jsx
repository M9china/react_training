import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

export const DataCollector = () => {
  // defining state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userDataList, setUserDataList] = useState([]);
  //   const [count, setCount] = useState(0);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, phone, address };
    setUserDataList(prevList => [...prevList, userData]);
    localStorage.setItem('userDataList', JSON.stringify(userDataList));
    console.log(userDataList)
    //alerting the user that the user that the form has been sent
    alert('Form submitted successfully');
    //clearing the user data input fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }
  //    const keepTrack = () => {
  // 
  // retrieving data from local storage.
  useEffect(() => {
    const data = localStorage.getItem('userDataList');
    // (data)? setUserDataList(JSON.parse(data)) : []});
    if (data) {
      setUserDataList(JSON.parse(data));
    } else {
      setUserDataList(null);
    }
  }, []);
  // }

  return <>
    <div className='myCompCont'>
      <div className='userForm'>
        <Link to={`/account`}></Link>
        <form onSubmit={handleFormSubmit}>
          <input type="text" title='Name' value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter your name and surname' required />
          <br />
          <input type="text" title='Email' value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter your email' required />
          <br />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" title='Phone' name="phone" placeholder='Enter phone number' required />
          <br />
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} id="address" title='Address' name="address" required placeholder='Enter your address' />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>

  </>
};


export const AddBlogPost = () => {
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
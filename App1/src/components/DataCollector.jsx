import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'

export const DataCollector = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [userDataList, setUserDataList] = useState([]);
//   const [count, setCount] = useState(0);
  
//    const keepTrack = () => {
    // 
    
    useEffect(() => {
        const data = localStorage.getItem('userDataList');
        // (data)? setUserDataList(JSON.parse(data)) : []});
        if (data) {
          setUserDataList(JSON.parse(data));
        }
    }, []);
    // }


  const handleFormSubmit = (event) => {
    event.preventDefault();
    const userData = { name, email, phone, address };
    setUserDataList(prevList => [...prevList, userData]);
    localStorage.setItem('userDataList', JSON.stringify(userDataList));
    console.log(userDataList)
    //alerting the user that the user that the form has been sent
    alert('Form submitted successfully');
    //clearing the user data list
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }

  return  <>
  <Link to={`/account`}></Link>
    <form onSubmit={handleFormSubmit}>
        <label>Name:</label><br/>
        <input type="text" title='Name' value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder='Enter your name' required />
        <br/>
        <label>Email:</label><br/>
        <input type="text" title='Email' value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder='Enter your email' required />
        <br/>
        <label>Phone:</label><br/>
        <input type="text"value={phone} onChange={(e) => setPhone(e.target.value)} id="phone" title='Phone' name="phone" placeholder='Enter phone number' required />
        <br/>
        <label>Address:</label><br/>
        <input type="text"value={address} onChange={(e) => setAddress(e.target.value)} id="address" title='Address' name="address" required placeholder='Enter your address'/>
        <br/>
        <button type="submit">Submit</button>
    </form>
  </>
};


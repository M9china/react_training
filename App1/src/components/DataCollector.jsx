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

  <div className='p-6 rounded-md'>
    <Link to={`/account`}></Link>
    <form onSubmit={handleFormSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} name="name" id="name" placeholder='Enter your name and surname' required className="appearance-none border rounded-md w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder='Enter your email' required className="appearance-none border rounded-md w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
          Phone
        </label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} name="phone" id="phone" placeholder='Enter phone number' required className="appearance-none border rounded-md w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" id="address" placeholder='Enter your address' required className="appearance-none border rounded-md w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      <div className="mb-4">
        <button type="submit" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline">Submit</button>
      </div>
    </form>
  </div>

  </>
};


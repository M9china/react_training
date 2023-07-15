import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {collection, addDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const DataCollector = () => {
  // defining state variables
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [userDataList, setUserDataList] = useState([]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const userData = { name, email, phone, address, password };
    await addDoc(collection(db, "userDataList"), userData);
    console.log("Document written to Firebase");
    alert('Form submitted successfully');
    //clearing the user data input fields
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
    setPassword('');
  }

  // retrieving data from Firebase
  useEffect(() => {
    const userDataRef = collection(db, "userDataList");
    const unsubscribe = onSnapshot(userDataRef, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() }); // include document ID in data
      });
      setUserDataList(data);
    });
    return () => unsubscribe();
  }, [db]);
  // console.log(userDataList)

  return <>

    <div className='p-6 rounded-md'>
      <Link to={`/account`}></Link>
      <form onChange={DataCollector}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input type="text" name="name" id="name" placeholder='Enter your name and surname' required className=" appearance-none border rounded-md w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input type="text" name="email" id="email" placeholder='Enter your email' required className="appearance-none border rounded-md w-1/2 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input type="password" name="password" id="password" placeholder='Enter your password' required className="appearance-none border rounded-md w-1/2 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input type="text" name="phone" id="phone" placeholder='Enter phone number' required className="appearance-none border rounded-md w-1/2 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
            Address
          </label>
          <input type="text" name="address" id="address" placeholder='Enter your address' required className="appearance-none border rounded-md w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <button onSubmit={handleFormSubmit} type="submit" className="bg-slate-700 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded-full focus:outline-none focus:shadow-outline">Submit</button>
        </div>
      </form>
    </div>

  </>
};


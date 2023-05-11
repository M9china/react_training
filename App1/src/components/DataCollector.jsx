import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';

const firebaseConfig = {
  // your firebase config object
  apiKey: "AIzaSyBXQFye-zBgjbqCquuUK6IRPOZh6tL-Sps",
  authDomain: "mywebapp-c9c07.firebaseapp.com",
  projectId: "mywebapp-c9c07",
  storageBucket: "mywebapp-c9c07.appspot.com",
  messagingSenderId: "524371572296",
  appId: "1:524371572296:web:5b787a6ee3dea976eb0a7d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
          <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder='Enter your password' required className="appearance-none border rounded-md w-1/2 py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline" />
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


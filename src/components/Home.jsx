import React, { useState, useEffect, useRef } from 'react';
import { name } from '../constants';
import Footer from './Footer';

const Home = () => {
  console.log('Home component rendered');

  const ref = useRef(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (ref.current < name.length) {
        ref.current++;
        setText((prevText) => prevText + name[ref.current - 1]);
      }
    }, 250);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='area relative z-0 bg-black w-screen h-screen'>
      <ul className="circles">
        {[...Array(10)].map((_, i) => (
          <li key={i}></li>
        ))}
      </ul>
      <div className='hero relative h-[calc(100vh)] flex justify-center items-center text-white' id='hero'>
        <div className='pt-4 h-36 backdrop-blur-sm rounded-3xl'>
          <h1 className='text-6xl sm:text-7xl font-extrabold mt-2'>Hi, I'm&nbsp;<span className='text-yellow-200 font-extrabold'>{text}</span></h1>
          <p className='mt-3 text-xl'>I love to build projects using MERN, Cloud & DevOps.</p>
        </div>      
      </div>
      <Footer/>
    </div>  
  );
}

export default Home;
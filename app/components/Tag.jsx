"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Button from './Button';
import Icon from './(icon)/Icon';
import Next from './(icon)/Next';
import { House } from 'lucide-react';

const Tag = () => {
  const msg = "test";

  const [data, setData] = useState(null);
  const [nameClass, setNameClass] = useState('');
  const nameClass1 = "bg-green-500";

  useEffect(() => {
    // Fetch the JSON data
    const fetchData = async () => {
      try {
        const response = await fetch('https://warathepj.github.io/nextjs-my-project-json/category-button.json');
        const result = await response.json();
        console.log(result); // Log the data to the console
        setData(result);

        // Assuming data is structured as in your example
        if (result && result['category-button'] && result['category-button'][0]) {
          setNameClass(result['category-button'][0].className); // Set nameClass to the value of "className"
        }
      } catch (error) {
        console.error('Error fetching the data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <div>
        NavBar
        {/* <p>--------------DEBUG START--------------</p> */}
        <div>
      <p>Rendered JSON Data</p>
      {data && (
        <p>{JSON.stringify(data, null, 2)}</p> // Render the JSON data inside a <pre> tag
      )}
       <p>className: {nameClass}</p>
    </div>
    {/* <p>--------------DEBUG END--------------</p> */}


        <Button className={`a ${nameClass}`}>{msg}</Button>

        <Link href="/">
        <House/>
      </Link>


        <Link href="/blog">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
            rounded-full"
          // onClick={() => handleTagClick('favorite')}
        >
          Blog
        </Button>
      </Link>

        <Link href="/category/all">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
            rounded-full"
          // onClick={() => handleTagClick('favorite')}
        >
          All Project
        </Button>
      </Link>

        <Link href="/category/html">
        <Button
          className="bg-red-500 hover:bg-red-300 text-white 
          font-bold py-2 px-4 rounded-full"
          // onClick={() => handleTagClick('favorite')}
        >
          html
        </Button>
      </Link>

        <Link href="/category/css">
        <Button
          className="bg-red-500 hover:bg-red-300
          font-bold py-2 px-4 rounded-full"
          // onClick={() => handleTagClick('favorite')}
        >
          css
        </Button>
      </Link>

      <Link href="/category/next">
      <Next/>
      </Link>
      

        <Icon/>
    </div>
  )
}

export default Tag




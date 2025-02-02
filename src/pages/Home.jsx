import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
   try {
     const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
       method: "GET",
       headers: {
         "Content-Type": "application/json",
       },
     });
     const json = await result.json();
     const displayData = json.slice(0,20);
     setData(displayData);
   } catch (error) {
    console.error(error);
   }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return(
  <div>
    <h2>fetched Data</h2>
    {data.map((item) => {
      return <div key={item.id}>{item.title}</div>;
    })}

  </div>
  )
};

export default Home;

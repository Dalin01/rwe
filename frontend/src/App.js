import Overview from "./screens/overview";
import React, { useState, useEffect } from 'react'

const url = 'http://localhost:5000/site';

function App() {

  const [overview, setOverview] = useState([]);

  useEffect(() => {
    requestData();
  }, []);

  async function requestData () {
    const response = await fetch(url);
    const data = await response.json();
    setOverview(data);
  }

  return (
    <>
      {overview.map((item, index) => {
        return <Overview item={item} key={index}/>
      })}
    </>
  );
}

export default App;

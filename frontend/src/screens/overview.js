import React, { useState, useEffect } from 'react'

const url = 'http://localhost:5000/site';

const Overview = () => {

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
    <div>
      
    </div>
  )
}

export default Overview

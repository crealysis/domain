import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  // store the data, the loading status, and any errors.
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect: perform "side effects," like API calls.
  useEffect(() => {
    // This inner function will do the actual fetching.
    const fetchData = async () => {
      try {
        // Use the native fetch API to make a GET request to the backend. 
        const response = await fetch('http://localhost:5019/api/endpoint');

        // Check if the network response was successful.
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Parse the response as JSON.
        const result = await response.json();

        // If successful, update the data state with the fetched data.
        setData(result);
      } catch (error) {
        // If there's an error, set the error state.
        setError(error);
      } finally {
        // Whether the request succeeded or failed, set loading to false.
        setLoading(false);
      }
    };

    // Call the fetchData function when the component mounts.
    fetchData();
  }, []); // The empty dependency array `[]` to ensure this runs only once on mount.

  // --- Conditional Rendering based on state ---
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Once the data is successfully fetched, render it.
  return (
    <div>
      <h2>Data from API:</h2>
      {/* A simple way to visualize the data - with <pre> tags */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataFetcher;
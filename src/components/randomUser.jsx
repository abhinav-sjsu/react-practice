import React, { useState, useEffect } from "react";

const RandomUserJSONApp = () => {
  const [userData, setUserData] = useState(null); // State to hold fetched JSON
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error messages

  // Function to fetch data
  const fetchUserData = async () => {
    setLoading(true); // Start loading
    setError(null); // Clear errors
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setUserData(data); // Update state with fetched JSON
    } catch (err) {
      setError(err.message); // Set error message
    } finally {
      setLoading(false); // End loading
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchUserData();
  }, []);

  // Render JSON or loading/error states
  return (
    <div
      style={{
        textAlign: "center",
        margin: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Random User JSON Viewer</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {userData && (
        <pre
          style={{
            textAlign: "left",
            background: "#f4f4f4",
            padding: "10px",
            borderRadius: "5px",
            overflowX: "auto",
          }}
        >
          {JSON.stringify(userData, null, 2)} {/* Pretty-print JSON */}
        </pre>
      )}
      <button
        onClick={fetchUserData}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "#fff",
        }}
      >
        Fetch New JSON
      </button>
    </div>
  );
};

export default RandomUserJSONApp;

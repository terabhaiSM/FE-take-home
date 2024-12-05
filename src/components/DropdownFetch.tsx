import React, { useEffect, useState } from "react";
import "./DropdownFetch.css";

interface DropdownFetchProps {
  onDataFetch: (data: any[]) => void;
  selectedOption: string;
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>;
}

const DropdownFetch: React.FC<DropdownFetchProps> = ({
  onDataFetch,
  selectedOption,
  setSelectedOption,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value); // Update dropdown value in parent
  };

  useEffect(() => {
    if (selectedOption === "") return; // Skip fetching if no option is selected

    const fetchData = async () => {
      setLoading(true);
      const endpoint =
        selectedOption === "posts"
          ? "https://jsonplaceholder.typicode.com/posts"
          : "https://jsonplaceholder.typicode.com/comments";

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        onDataFetch(data); // Pass the data to the parent
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOption, onDataFetch]);

  return (
    <div className="dropdown-fetch">
      <label htmlFor="data-select">Fetch Content:</label>
      <select
        id="data-select"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="" disabled>
          Select content type
        </option>
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
      </select>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DropdownFetch;

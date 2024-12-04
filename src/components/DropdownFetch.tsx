import React from "react";
import "./DropdownFetch.css";

interface DropdownFetchProps {
  onDataFetch: (data: any[]) => void; // Function to pass data to parent
  selectedOption: string; // The currently selected option
  setSelectedOption: React.Dispatch<React.SetStateAction<string>>; // Function to update selected option
}

const DropdownFetch: React.FC<DropdownFetchProps> = ({
  onDataFetch,
  selectedOption,
  setSelectedOption,
}) => {
  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value); // Update selected option in parent
  };

  React.useEffect(() => {
    const fetchData = async () => {
      const endpoint =
        selectedOption === "posts"
          ? "https://jsonplaceholder.typicode.com/posts"
          : "https://jsonplaceholder.typicode.com/comments";

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        onDataFetch(data); // Pass data to parent
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedOption, onDataFetch]);

  return (
    <div className="dropdown-fetch">
      <label htmlFor="data-select">Fetch posts / comments:</label>
      <select
        id="data-select"
        value={selectedOption}
        onChange={handleDropdownChange}
      >
        <option value="posts">Posts</option>
        <option value="comments">Comments</option>
      </select>
    </div>
  );
};

export default DropdownFetch;
import React, { useState, useCallback, useMemo } from "react";
import Header from "./components/Header";
import DropdownFetch from "./components/DropdownFetch";
import TableComponent from "./components/TableComponent";
import DownloadButton from "./components/DownloadButton";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleDataFetch = useCallback((fetchedData: any[]) => {
    setData(fetchedData);
  }, []);

  const columns = useMemo(
    () => (selectedOption === "posts" ? ["ID", "Title"] : ["ID", "Name"]),
    [selectedOption]
  );

  const fileName = selectedOption === "posts" ? "posts.csv" : "comments.csv";

  return (
    <div className="App">
      <div className="container">
        <Header />

        {/* Fetch Content Section */}
        <div className="dropdown-section">
          <h2 className="section-title">Fetch Content</h2>
          <div className="section-box">
            <DropdownFetch
              onDataFetch={handleDataFetch}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>
        </div>

        {/* Displaying Content Section */}
        <div className="content">
          <h2 className="section-title">Displaying Content</h2>
          <div className="section-box">
            {data.length === 0 ? (
              <p className="placeholder-message">
                Select content type to fetch results
              </p>
            ) : (
              <TableComponent data={data} columns={columns} />
            )}
          </div>
          {data.length > 0 && <DownloadButton data={data} fileName={fileName} />}
        </div>
      </div>
    </div>
  );
}

export default App;
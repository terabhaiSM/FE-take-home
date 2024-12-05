import React, { useState, useCallback, useMemo } from "react";
import Header from "./components/Header";
import DropdownFetch from "./components/DropdownFetch";
import TableComponent from "./components/TableComponent";
import DownloadButton from "./components/DownloadButton";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState(""); //Default is empty

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
      <Header />
      <DropdownFetch
        onDataFetch={handleDataFetch}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <TableComponent data={data} columns={columns} />
      <DownloadButton data={data} fileName={fileName} />
    </div>
  );
}

export default App;

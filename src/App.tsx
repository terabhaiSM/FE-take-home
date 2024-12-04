import React, { useState, useCallback, useMemo } from "react";
import Header from "./components/Header";
import DropdownFetch from "./components/DropdownFetch";
import TableComponent from "./components/TableComponent";
import "./App.css";

function App() {
  const [data, setData] = useState<any[]>([]);
  const [selectedOption, setSelectedOption] = useState("posts");

  const handleDataFetch = useCallback((fetchedData: any[]) => {
    setData(fetchedData);
  }, []);

  // Use useMemo for columns to memoize the value based on selectedOption
  const columns = useMemo(
    () => (selectedOption === "posts" ? ["ID", "Title"] : ["ID", "Name"]),
    [selectedOption]
  );

  return (
    <div className="App">
      <Header />
      <DropdownFetch
        onDataFetch={handleDataFetch}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <TableComponent data={data} columns={columns} />
    </div>
  );
}

export default App;
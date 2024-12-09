import React, { useState, useEffect } from "react";
import "./App.css";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const App: React.FC = () => {
  const [data, setData] = useState<Post[] | Comment[]>([]);
  const [type, setType] = useState<"posts" | "comments">("posts");
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of rows per page

  // Function to determine visible pages for pagination
  const getVisiblePages = () => {
    const visiblePages: (number | string)[] = [];
    const totalPages = Math.ceil(data.length / itemsPerPage);

    if (totalPages <= 7) {
      // Show all pages if total pages are less than or equal to 7
      for (let i = 1; i <= totalPages; i++) {
        visiblePages.push(i);
      }
    } else {
      // Handle cases where total pages are more than 7
      if (currentPage <= 4) {
        // Show the first 5 pages and the last page
        visiblePages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        // Show the first page, ellipsis, and last 5 pages
        visiblePages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        // Show the first page, ellipsis, surrounding pages, and last page
        visiblePages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }

    return visiblePages;
  };

  const handlePageChange = (page: number) => {
    const totalPages = Math.ceil(data.length / itemsPerPage);
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleSelect = (value: "posts" | "comments") => {
    setType(value);
    setDropdownOpen(false);
    setCurrentPage(1); // Reset to the first page on type change
  };

  const columns: Record<string, string[]> = {
    posts: ["ID", "Title"],
    comments: ["ID", "Name"],
  };

  useEffect(() => {
    setLoading(true);
    const endpoint =
      type === "posts"
        ? "https://jsonplaceholder.typicode.com/posts"
        : "https://jsonplaceholder.typicode.com/comments";

    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, [type]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const downloadCSV = () => {
    const csvHeaders = columns[type].join(",");
    const csvRows = data.map((item) =>
      type === "posts"
        ? `${(item as Post).id},${(item as Post).title}`
        : `${(item as Comment).id},${(item as Comment).name}`
    );
    const csvContent = [csvHeaders, ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${type}_data_page_${currentPage}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Dynamic Content Manager</h1>

      <hr
        style={{
          height: "0px",
          border: "1px solid #DFDFDF",
          flex: "none",
          order: 1,
          alignSelf: "stretch",
          flexGrow: 0,
        }}
      />

      <div className="dropdown-container">
        <label className="dropdown-label">Fetch Content</label>
        <div className="dropdown-cardd">
          <div
            className={`custom-dropdown ${dropdownOpen ? "open" : ""}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="selected-value">
              {type === "posts" ? "Posts" : "Comments"}
            </span>
            <div className="dropdown-arrow"></div>
          </div>
          {dropdownOpen && (
            <div className="dropdown-card">
              <div
                className={`dropdown-option ${
                  type === "posts" ? "selected" : ""
                }`}
                onClick={() => handleSelect("posts")}
              >
                Posts
              </div>
              <div
                className={`dropdown-option ${
                  type === "comments" ? "selected" : ""
                }`}
                onClick={() => handleSelect("comments")}
              >
                Comments
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="table-container">
        <h2 className="table-title">Displaying Content</h2>
        {loading ? (
          <p className="loading-text">Loading...</p>
        ) : (
          <>
            <table className="data-table">
              <thead>
                <tr>
                  {columns[type].map((col) => (
                    <th key={col} className={`table-header ${col.toLowerCase()}`}>
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="data-table-body">
                {currentData.map((item, index) => (
                  <tr
                    key={item.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#F9FAFB" : "white",
                    }}
                  >
                    <td className="table-cell id">{item.id}</td>
                    <td className="table-cell title">
                      {type === "posts"
                        ? (item as Post).title
                        : (item as Comment).name}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
        {/* Left Arrow */}
        <button
        className="button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <span className="arrow-left">{"<"}</span>
        </button>

        {/* Pagination Numbers */}
        {getVisiblePages().map((page, index) =>
          typeof page === "number" ? (
            <button
            className="button"
              key={index}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="pagination-ellipsis">
              {page}
            </span>
          )
        )}

        {/* Right Arrow */}
        <button
        className="button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <span className="arrow-right">{">"}</span>
        </button>
      </div>
          </>
        )}
      </div>
      <div className="download-button-container">
        <button className="download-button" onClick={downloadCSV}>
          Download
        </button>
      </div>
    </div>
  );
};

export default App;

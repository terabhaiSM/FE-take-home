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

  const handleSelect = (value: "posts" | "comments") => {
    setType(value);
    setDropdownOpen(false);
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

  return (
    <div className="app-container">
      <h1 className="app-title">Dynamic Content Manager</h1>

    <hr style={{
        height: "0px",
        border: "1px solid #DFDFDF",
        flex: "none",
        order: 1,
        alignSelf: "stretch",
        flexGrow: 0
    }} />

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
            {data.slice(0, 10).map((item, index) => (
              <tr key={item.id} style={{ backgroundColor: index % 2 === 0 ? "#F9FAFB" : "white" }}>
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
      )}
      </div>
    </div>
  );
};

export default App;

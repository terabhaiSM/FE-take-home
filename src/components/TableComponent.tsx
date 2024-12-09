import React from "react";
import "../App.css";

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

type TableProps = {
    data: Post[] | Comment[];
    type: "posts" | "comments";
    currentPage: number;
    itemsPerPage: number;
    loading: boolean;
    handlePageChange: (page: number) => void;
    getVisiblePages: () => (number | string)[];
};

const Table: React.FC<TableProps> = ({
    data,
    type,
    currentPage,
    itemsPerPage,
    loading,
    handlePageChange,
    getVisiblePages,
}) => {
    const columns: Record<string, string[]> = {
        posts: ["ID", "Title"],
        comments: ["ID", "Name"],
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    return (
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
                        <button
                            className="button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <span className="arrow-left">{"<"}</span>
                        </button>
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
    );
};

export default Table;
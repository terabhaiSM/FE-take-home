import React from "react";
import "./TableComponent.css";

interface TableComponentProps {
  data: Record<string, any>[]; // Array of objects with string keys
  columns: string[]; // Array of column headers
}

const TableComponent: React.FC<TableComponentProps> = ({ data, columns }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((col: string, index: number) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item: Record<string, any>, index: number) => (
            <tr key={index}>
              {columns.map((col: string, colIndex: number) => {
                const key = col.toLowerCase(); // Match column header to data key
                return <td key={colIndex}>{item[key]}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;

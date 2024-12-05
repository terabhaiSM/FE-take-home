import React from "react";
import "./DownloadButton.css";

interface DownloadButtonProps {
  data: any[];
  fileName: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ data, fileName }) => {
  const handleDownload = () => {
    const csvContent = data
      .map((row) => Object.values(row).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      Download
    </button>
  );
};

export default DownloadButton;

import React, { useState } from "react";
import type { TextContent, TextItem } from "pdfjs-dist/types/src/display/api";
import styles from "../styles/ResumeUploader.module.css";
import { MdCloudUpload } from "react-icons/md";

type Props = {
  setResumeText: React.Dispatch<React.SetStateAction<string>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ResumeUploader: React.FC<Props> = ({ setResumeText, setIsLoading }) => {
  const [error, setError] = useState("");
  const [isDragOver, setIsDragOver] = useState(false);

  const mergeTextContent = (textContent: TextContent) => {
    return textContent.items
      .map((item) => {
        const { str, hasEOL } = item as TextItem;
        return str + (hasEOL ? "\n" : "");
      })
      .join("");
  };

  const readResume = async (pdfFile: File | undefined) => {
    const pdfjs = await import("pdfjs-dist");
    pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

    if (!pdfFile) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target?.result;
      if (arrayBuffer && arrayBuffer instanceof ArrayBuffer) {
        const loadingTask = pdfjs.getDocument(new Uint8Array(arrayBuffer));
        loadingTask.promise.then(
          (pdfDoc) => {
            pdfDoc.getPage(1).then((page) => {
              page.getTextContent().then((textContent) => {
                const extractedText = mergeTextContent(textContent);
                setResumeText(extractedText);
              });
            });
          },
          (reason) => {
            console.error(`Error during PDF loading: ${reason}`);
          }
        );
      }
    };
    reader.readAsArrayBuffer(pdfFile);
  };

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setResumeText("");
    setError("");
    setIsLoading(true);

    try {
      const items = event.dataTransfer.items;

      if (!items || items.length !== 1) {
        throw new Error("Please drop a single file.");
      }
      const item = items[0];

      if (item.kind !== "file" || item.type !== "application/pdf") {
        throw new Error("Please drop a single PDF file.");
      }
      const file = item.getAsFile();

      if (!file) {
        throw new Error("The PDF wasn't uploaded correctly.");
      }
      await readResume(file);
    } catch (error) {
      setError("There was an error reading the resume. Please try again.");
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragOver(false);
  };

  const handleButtonUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");
    setIsLoading(true);
    setResumeText("");

    try {
      const file = event.target.files?.[0];
      if (!file) {
        setError("The PDF wasn't uploaded correctly.");
        setIsLoading(false);
        return;
      }
      await readResume(file);
    } catch (error) {
      setError("There was an error reading the resume. Please try again.");
    }
  };

  return (
    <div>
      <div
        className={`${styles.fileUploadBtnContainer} ${
          isDragOver ? styles.dragOver : ""
        }`}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => handleDrop(e)}
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => handleDragOver(e)}
        onDragEnter={(e: React.DragEvent<HTMLDivElement>) => handleDragEnter(e)}
      >
        <input
          type="file"
          id="file-upload"
          onChange={handleButtonUpload}
          accept="application/pdf"
          hidden
        />
        <label htmlFor="file-upload" className="custum-file-upload">
          <div className="icon">
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "#f135a8", stopOpacity: 1 }} />
                  <stop offset="25%" style={{ stopColor: "#ff4885", stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: "#cd71d8", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#ffdd8c", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              <g id="SVGRepo_iconCarrier">
                <path
                  fill="url(#grad2)"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z"
                />
              </g>
            </svg>
          </div>
          <div className="text flex-col">
            <span>Click to upload resume</span>
            <span className="text-sm color-white"></span>
          </div>
        </label>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default ResumeUploader;

// app/uploadManual/page.tsx

'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function UploadManual() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const router = useRouter();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("manual", selectedFile);

      console.log("Uploading file...");
      try {
        const response = await fetch("http://127.0.0.1:5000/process-manual", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          // Handle successful upload
          setUploadSuccess(true);
        } else {
          // Handle error
          console.error("Upload failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <main className="h-[90vh] bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          Upload User Manual
        </h1>
        <div className="mb-4">
          <label
            htmlFor="manual"
            className="block mb-2 font-medium text-gray-700"
          >
            Select User Manual:
          </label>
          <div className="relative">
            <input
              type="file"
              id="manual"
              onChange={handleFileChange}
              className="border border-gray-300 rounded-md px-4 py-2 w-full"
            />
            {selectedFile && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <Image
                  src="/file-icon.svg"
                  alt="File Icon"
                  width={24}
                  height={24}
                />
              </div>
            )}
          </div>
          {selectedFile && (
            <p className="text-sm mt-2 text-gray-600">
              Selected file: {selectedFile.name}
            </p>
          )}
        </div>
        <button
          onClick={handleUpload}
          className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300 w-full"
        >
          Upload
        </button>
        {uploadSuccess && (
          <p className="text-green-600 text-sm mt-4 text-center">
            Successfully uploaded!
          </p>
        )}
      </div>
    </main>
  );
}
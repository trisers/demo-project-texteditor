"use client";
import React, { useState, useEffect } from "react";
import JoditProEditor from "@/components/Jodit/JoditEditor";

const Page = () => {
  const [editorLoaded, setEditorLoaded] = useState(false);

  useEffect(() => {
    // Simulate a short delay to show loader until Jodit is mounted
    const timer = setTimeout(() => {
      setEditorLoaded(true);
    }, 300); // adjust time if needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-[90%] h-[90vh] bg-transparent px-6  rounded-xl mt-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Jodit Editor</h1>
        <div className="h-[90vh] ">
          {!editorLoaded ? (
            <div className="flex items-center justify-center h-[90vh]">
              <div className="animate-spin rounded-full h-10 w-10 border-4 border-black border-t-transparent"></div>
            </div>
          ) : (
            <JoditProEditor />
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;

"use client";

import React, { useRef, useMemo, useCallback } from "react";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-pro-react"), { ssr: false });

const JoditProEditor = ({ initialValue, onChange: onEdit }) => {
  const editor = useRef(null);

  const config = useMemo(
    () => ({
      readonly: false,
      height: 500,
      toolbarSticky: true,
      toolbarButtonSize: "large",
      spellcheck: true,
      uploader: {
        insertImageAsBase64URI: true,
      },
    }),
    []
  );

  return (
    <>
      <JoditEditor
        ref={editor}
        value={initialValue}
        config={config}
        onBlur={onEdit}
      />
    </>
  );
};

export default JoditProEditor;

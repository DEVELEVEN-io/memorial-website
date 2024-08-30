"use client";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar"; // Assuming Toolbar is a separate component

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline], // Include the necessary extensions
    content: "<p>Your initial content here</p>",
  });

  // Ensure the editor is actually used
  if (!editor) {
    return null;
  }

  return (
    <div className="rounded-md border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      {/* Pass the editor instance to the Toolbar */}
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;

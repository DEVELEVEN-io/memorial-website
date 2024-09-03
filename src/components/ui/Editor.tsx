// src/components/ui/Editor.tsx
"use client";
import "@/styles/editor.css";
import { Editor as TiptapEditor } from "@tiptap/core"; // Import the base Editor type if needed
import { EditorContent } from "@tiptap/react";
import Toolbar from "./Toolbar";

interface EditorProps {
  editor: TiptapEditor | null; // Use TiptapEditor type for better type checking
}

const Editor = ({ editor }: EditorProps) => {
  if (!editor) return null;

  return (
    <div className="editor-container rounded-md border border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;

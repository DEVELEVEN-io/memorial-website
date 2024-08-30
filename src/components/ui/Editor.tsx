// src/components/ui/Editor.tsx
"use client";
import "@/styles/editor.css";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Editor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Start typing from here.</p>",
  });

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

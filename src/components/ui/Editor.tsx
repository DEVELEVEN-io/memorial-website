// src/components/ui/Editor.tsx
"use client";
import "@/styles/editor.css";
import { Color } from "@tiptap/extension-color";
import { Highlight } from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      Color.configure({ types: ["textStyle"] }),
      Highlight.configure({
        multicolor: true,
      }),
      Link,
    ],
    content: "<p>Start typing from here.</p>",
  });

  if (!editor) return null;

  return (
    <div className="rounded-md border border-gray-300 bg-gray-50 editor-container dark:border-gray-700 dark:bg-gray-900">
      <Toolbar editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;

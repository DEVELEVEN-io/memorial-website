// src/components/ui/Toolbar.tsx
import "@/styles/editor.css";
import { useState } from "react";
import {
  FaBold,
  FaChevronDown,
  FaItalic,
  FaList,
  FaUnderline,
} from "react-icons/fa";

const Toolbar = ({ editor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!editor) return null;

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const applyHeading = (level) => {
    editor.chain().focus().toggleHeading({ level }).run();
    setIsDropdownOpen(false);
  };

  const applyList = (listType) => {
    switch (listType) {
      case "bullet":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "ordered":
        editor.chain().focus().toggleOrderedList().run();
        break;
      default:
        editor.chain().focus().setParagraph().run();
    }
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex items-center space-x-2 rounded-t-md bg-gray-200 p-2 dark:bg-gray-800">
      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="flex items-center rounded-md bg-gray-300 p-2 dark:bg-gray-600"
        >
          <FaList /> <FaChevronDown className="ml-1" />
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 mt-2 w-48 rounded-md border border-gray-300 bg-white shadow-lg dark:border-gray-600 dark:bg-gray-700">
            <button
              onClick={() => applyHeading(1)}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Heading 1
            </button>
            <button
              onClick={() => applyHeading(2)}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Heading 2
            </button>
            <button
              onClick={() => applyHeading(3)}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Heading 3
            </button>
            <button
              onClick={() => applyList("bullet")}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Bullet list
            </button>
            <button
              onClick={() => applyList("ordered")}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Numbered list
            </button>
            <button
              onClick={() => applyList("paragraph")}
              className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Paragraph
            </button>
          </div>
        )}
      </div>

      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`rounded-md p-2 ${
          editor.isActive("bold") ? "bg-gray-300 dark:bg-gray-600" : ""
        }`}
      >
        <FaBold />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`rounded-md p-2 ${
          editor.isActive("italic") ? "bg-gray-300 dark:bg-gray-600" : ""
        }`}
      >
        <FaItalic />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`rounded-md p-2 ${
          editor.isActive("underline") ? "bg-gray-300 dark:bg-gray-600" : ""
        }`}
      >
        <FaUnderline />
      </button>
    </div>
  );
};

export default Toolbar;

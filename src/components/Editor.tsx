import { useState } from "react";
import Dialog from "./Dialog";
import PostContainer from "./PostContainer";

export default function Editor() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    const dialog = document.querySelector("dialog");
    if (isOpen) {
      setIsOpen(false);
      dialog?.close();
    } else {
      setIsOpen(true);
      dialog?.showModal();
    }
  };

  return (
    <div>
      <Dialog clickHandler={clickHandler} />
      <button
        type="button"
        onClick={clickHandler}
        className="bg-sky-600 text-white rounded px-2 py-1 mb-4"
      >
        + Create New Post
      </button>
      <PostContainer />
    </div>
  );
}

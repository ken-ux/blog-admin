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
        className="mb-4 rounded bg-sky-600 px-2 py-1 text-white"
      >
        + Create New Post
      </button>
      <PostContainer />
    </div>
  );
}

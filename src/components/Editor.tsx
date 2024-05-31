import PostContainer from "./PostContainer";

export default function Editor() {
  return (
    <div>
      <button type="button" className="bg-sky-600 text-white rounded px-2 py-1 mb-2">
        + Create New Post
      </button>
      <PostContainer />
    </div>
  );
}

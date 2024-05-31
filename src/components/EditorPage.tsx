import Editor from "./Editor";
import { LoginFormProps } from "../types";

export default function EditorPage({ setAuthenticated }: LoginFormProps) {
  async function clickHandler() {
    // End login session
    const url = import.meta.env.VITE_API_URL + "/logout";
    await fetch(url);

    // Remove JWT
    localStorage.clear();
    setAuthenticated(false);
  }

  return (
    <main className="border border-red-500 flex flex-col">
      <button
        type="button"
        onClick={clickHandler}
        className="text-lg self-end px-2 py-1 bg-slate-600 text-white rounded"
      >
        Logout
      </button>
      <h1 className="text-2xl mb-4">Edit or Create Posts</h1>
      <Editor />
    </main>
  );
}

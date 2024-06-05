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
    <main className="flex flex-col">
      <button
        type="button"
        onClick={clickHandler}
        className="self-end rounded bg-slate-600 px-2 py-1 text-lg text-white"
      >
        Logout
      </button>
      <h1 className="mb-4 text-2xl">Edit or Create Posts</h1>
      <Editor />
    </main>
  );
}

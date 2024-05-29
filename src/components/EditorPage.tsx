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
    <>
      <button type="button" onClick={clickHandler} className="text-lg self-end">
        Logout
      </button>
      <Editor />
    </>
  );
}

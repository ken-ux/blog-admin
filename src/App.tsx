import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Editor from "./components/Editor";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="border border-red-400 flex flex-col items-center gap-6 p-4 max-w-screen-xl m-auto">
      {!authenticated && <LoginPage setAuthenticated={setAuthenticated} />}
      {authenticated && <Editor />}
    </div>
  );
}

export default App;

import { useState } from "react";
import LoginPage from "./components/LoginPage";
import EditorPage from "./components/EditorPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="border border-red-400 flex flex-col items-center gap-6 p-4 max-w-screen-xl m-auto my-8">
      {authenticated ? (
        <EditorPage setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;

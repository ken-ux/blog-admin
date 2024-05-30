import { useState } from "react";
import LoginPage from "./components/LoginPage";
import EditorPage from "./components/EditorPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="border border-red-400 p-4 max-w-screen-xl my-8 m-auto">
      {authenticated ? (
        <EditorPage setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;

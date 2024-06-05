import { useState } from "react";
import LoginPage from "./components/LoginPage";
import EditorPage from "./components/EditorPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="m-auto max-w-screen-xl rounded-lg bg-white p-16 shadow-xl">
      {authenticated ? (
        <EditorPage setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;

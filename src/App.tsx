import { useState } from "react";
import LoginPage from "./components/LoginPage";
import EditorPage from "./components/EditorPage";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="p-16 max-w-screen-xl my-8 m-auto bg-white rounded-lg shadow-xl">
      {authenticated ? (
        <EditorPage setAuthenticated={setAuthenticated} />
      ) : (
        <LoginPage setAuthenticated={setAuthenticated} />
      )}
    </div>
  );
}

export default App;

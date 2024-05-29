import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="border border-red-400 flex flex-col items-center gap-6 p-4 max-w-screen-xl m-auto">
      <h1 className="text-2xl">Blog Admin</h1>
      <p>Login to create and edit your posts.</p>
      <LoginForm />
    </div>
  );
}

export default App;

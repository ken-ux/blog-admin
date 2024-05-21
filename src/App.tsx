function App() {
  return (
    <div className="border border-red-400">
      <form action={import.meta.env.VITE_API_URL + "/login"} method="post">
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border"
            name="username"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="border"
            name="password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;

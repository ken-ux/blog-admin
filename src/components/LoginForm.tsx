export default function LoginForm() {
  return (
    <form
      action={import.meta.env.VITE_API_URL + "/login"}
      method="post"
      className="border min-h-80 p-4 flex flex-col gap-4"
    >
      <div className="flex gap-2 justify-between">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="border"
          name="username"
          required
        />
      </div>
      <div className="flex gap-2 justify-between">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border"
          name="password"
          required
        />
      </div>
      <button type="submit" className="border">
        Login
      </button>
    </form>
  );
}

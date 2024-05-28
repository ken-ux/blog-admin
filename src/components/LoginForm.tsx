const url = import.meta.env.VITE_API_URL + "/login";

export default function LoginForm() {
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    const postData = new URLSearchParams(
      new FormData(e.target as HTMLFormElement) as unknown as string
    );

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: postData,
      });

      const result = await response.json();
      console.log("Response:", result);

      // Save to local storage if result includes token
      if (result.token) {
        localStorage.setItem("token", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={submit}
      // action={url}
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
          autoComplete="username"
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
          autoComplete="current-password"
        />
      </div>
      <button type="submit" className="border">
        Login
      </button>
    </form>
  );
}

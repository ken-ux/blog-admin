const url = import.meta.env.VITE_API_URL + "/login";

export default function LoginForm() {
  async function submitHandler(e: React.FormEvent) {
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
        localStorage.setItem("token", result.token);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const clickHandler = async () => {
    const urlTwo = import.meta.env.VITE_API_URL + "/protected";
    const response = await fetch(urlTwo, {
      headers: {
        Authorization: localStorage.getItem("token") as string,
      },
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <form
      onSubmit={submitHandler}
      method="post"
      className="border p-8 flex flex-col gap-4"
    >
      <div className="flex gap-3 justify-between items-center">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="border px-2 py-0.5 rounded"
          name="username"
          required
          autoComplete="username"
        />
      </div>
      <div className="flex gap-3 justify-between items-center">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="border px-2 py-0.5 rounded"
          name="password"
          required
          autoComplete="current-password"
        />
      </div>
      <button
        type="submit"
        className="border py-2 rounded bg-sky-600 text-white"
      >
        Login
      </button>
      <button type="button" onClick={clickHandler}>
        Try Request
      </button>
      <button
        type="button"
        onClick={() => {
          console.log(localStorage.clear());
        }}
      >
        Clear Token
      </button>
    </form>
  );
}

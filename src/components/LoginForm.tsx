import { useState } from "react";
import { LoginFormProps } from "../types";

export default function LoginForm({ setAuthenticated }: LoginFormProps) {
  const [error, setError] = useState(false);

  async function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const postData = new URLSearchParams(
      new FormData(e.target as HTMLFormElement) as unknown as string,
    );
    const url = import.meta.env.VITE_API_URL + "/login";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: postData,
      });

      if (response.status === 401) {
        setError(true);
      }

      const result = await response.json();
      console.log("Response:", result);

      // Save to local storage if result includes token
      if (result.token) {
        localStorage.setItem("token", result.token);
        setAuthenticated(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      method="post"
      className="flex w-96 flex-col gap-4 border p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="rounded border px-2 py-0.5"
          name="username"
          required
          autoComplete="username"
        />
      </div>
      <div className="flex items-center justify-between gap-3">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          className="rounded border px-2 py-0.5"
          name="password"
          required
          autoComplete="current-password"
        />
      </div>
      {error && (
        <p className="text-red-500">
          Incorrect username or password. Please try again.
        </p>
      )}
      <button
        type="submit"
        className="rounded border bg-sky-600 py-2 text-white"
      >
        Login
      </button>
    </form>
  );
}

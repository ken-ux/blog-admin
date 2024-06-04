import { useEffect } from "react";
import LoginForm from "./LoginForm";
import { LoginFormProps } from "../types";

export default function LoginPage({ setAuthenticated }: LoginFormProps) {
  useEffect(() => {
    const token = localStorage.getItem("token");

    async function auth() {
      const url = import.meta.env.VITE_API_URL + "/login";
      const response = await fetch(url, {
        headers: { Authorization: token as string },
      });
      if (response.status === 200) {
        setAuthenticated(true);
      }
    }
    auth();
  });

  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-2xl">Blog Admin</h1>
      <p>Login to create and edit your posts.</p>
      <LoginForm setAuthenticated={setAuthenticated} />
    </main>
  );
}
